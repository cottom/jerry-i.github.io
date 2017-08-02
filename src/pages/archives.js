import { Component } from 'react'
import Helmet from 'react-helmet';
import styled from 'styled-components'
import StyledLink from '../components/StyleLink'
import { rhythm } from '../utils/typography'
import BlogYearList from '../components/BlogYearList'
const Wrapper = styled.section`

`

const TimeWrapper = styled.section`
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(1)};
`
const TimeTitle = styled.div`
  font-size: ${rhythm(1.2)};
  margin-bottom: ${rhythm(0.4)};
`

const PostItem = styled(StyledLink)`
  color: #111;
  padding-left: ${rhythm(1)};
  &:hover {
    opacity: 0.8;
  }
`
const PostTime = styled.span`
  color: #aaa;
  font-size: ${rhythm(0.2)};
  margin-left:  ${rhythm(0.3)};
  font-family: fantasy;
`

const Icon = styled.i`
  margin-right: 6px;
`

export default class ArchivesPage extends Component {
  render() {
    const {data: {allMarkdownRemark: {edges = []}}} = this.props
    const formatterData = {}
    console.log(edges)
    const posts = edges.map(item => item.node.frontmatter)
    return (
      <Wrapper>
        <Helmet>
          <title>Archives | Cottom's Blog</title>
        </Helmet>
        <BlogYearList posts={posts}></BlogYearList>
      </Wrapper>
    )
  }
}

export const pageQuery = graphql `
  query BlogPostsIndexQuery {
    allMarkdownRemark(
      limit: 1000
      filter:{fileAbsolutePath: {regex: "/posts/"}}
      sort: { order: DESC, fields: [frontmatter___date] },
  ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
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
`
