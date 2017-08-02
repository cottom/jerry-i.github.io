const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const fs = require('fs-extra')
const CONFIG = require('./config')
let createPage
exports.createPages = ({ graphql, boundActionCreators }) => {
  const {  createPage: _createPage } = boundActionCreators
  createPage = _createPage
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter:{fileAbsolutePath: {regex: "/posts/"}}
          sort: { order: DESC, fields: [frontmatter___date] },
        ) {
          edges {
            node {
              excerpt
              html
              id
              timeToRead
              frontmatter {
                excerpt
                path
                title
                tags
                category
                date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      const posts = result.data.allMarkdownRemark.edges
      createPages(posts)
      createTagPage(posts)
      createCategory(posts)
      createPost(posts)
      resolve()
    })
  })
}

function createPages(posts) {
  const component = path.resolve('./src/templates/page.js')
  const { PAGE_SIZE } = CONFIG
  const pageNum = Number(Math.ceil(posts.length / PAGE_SIZE))
  for (let i = 0; i < pageNum; i++) {
    ((_i) => {
      const path = _i ? `/page/${_i + 1}` : '/'
      createPage({
        path,
        component,
        context: {
          index: _i + 1,
          posts: posts.slice(_i * PAGE_SIZE, (_i + 1) * PAGE_SIZE),
          total: posts.length,
          pageNum: pageNum
        }
      })
    })(i)
  }
}

function createTagPage(posts) {
  const component = path.resolve('./src/templates/tag-page.js')
  const tags = {}
  posts.forEach(post => {
    const {  title, path, tags: _tags, date, category} = post.node.frontmatter
    if (!Array.isArray(_tags)) return;
    _tags.forEach(_tag => {
      if (!tags[_tag]) tags[_tag] = []
      tags[_tag].push({
        path: `/blog${path}`,
        title,
        date,
        category
      })
    })
  })
  const tagsKeys = Object.keys(tags);
  tagsKeys.forEach(tag => {
    createPage({
      path: `/tag/${tag}`,
      component,
      context: {
        tag,
        tags: tagsKeys,
        posts: tags[tag]
      }
    })
  })
  if (tagsKeys.length) {
    createPage({
      path: '/tag',
      component,
      context: {
        tag: tagsKeys[0],
        tags: tagsKeys,
        posts: tags[tagsKeys[0]]
      }
    })
  }
}


function createCategory(posts = []) {
  const component = path.resolve('./src/templates/categories.js')
  const categories = {}
  posts.forEach(item => {
    const { category, date, title, tags = [], path } = item.node.frontmatter
    if (!category) return
    if (!categories[category]) categories[category] = []
    categories[category].push({
      path: `/blog${path}`,
      category,
      date,
      title,
      tags
    })
  })
  const categoriesStr = Object.keys(categories)
  categoriesStr.forEach(item => {
    createPage({
      component,
      path: `/category/${item}`,
      context: {
        category: item,
        categories: categoriesStr,
        posts: categories[item]
      }
    })
  })
}

function createPost(posts) {
  const component = path.resolve('./src/templates/blog-post.js')
  posts.forEach((item, index) => {
    let previous = posts[index - 1]
    previous = previous && {
      title: previous.node.frontmatter.title,
      path: `/blog${previous.node.frontmatter.path}`
    }
    let next = posts[index + 1]
    next = next && {
      title: next.node.frontmatter.title,
      path: `/blog${next.node.frontmatter.path}`
    }
    createPage({
      path: `/blog${item.node.frontmatter.path}`,
      component,
      context: {
        post: item,
        previous,
        next
      }
    })
  })
}
