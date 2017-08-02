import styled from 'styled-components'
import { collectBlogByYear } from '../utils/helper'
import StyledLink from './StyleLink'
import { rhythm } from '../utils/typography';
import Tag from '../components/Tag'

const PostContainer = styled.section`

`
const  PostContainerInner = styled.ul`

`
const PostItemContainer = styled.li`

`
const PostItem = styled(StyledLink)`

`

const YearItem = styled.section`
  margin-bottom: ${rhythm(1)}
`

const YearTitle = styled.div`
  font-size: ${rhythm(1.3)};
  margin-top: ${rhythm(1)};
  padding-bottom: ${rhythm(0.3)};
  border-bottom: solid 1px #ddd;
`

const PostLabel = styled.span`
  padding-left: ${rhythm(0.6)};
  color: #aaa;
  font-size: 12px;
`

export default function BlogYearList({posts}) {
  const showPosts = collectBlogByYear(posts || [])
  return (
    <PostContainer>
      {
        Object.keys(showPosts).sort((a, b) => b - a).map((item, index) => {
          return (
            <YearItem key={index}>
              <YearTitle>{item}</YearTitle>
              <PostContainerInner>
              {
                showPosts[item].map((post, index) => {
                  return <PostItemContainer key={index}>
                  <PostItem to={/\/blog/.test(post.path) ? post.path : `/blog${post.path}`}>{post.title}</PostItem>
                  <PostLabel>
                  (
                    { post.date.replace(/-/g, '/')}；
                    {post.category &&  (<span>分类: <StyledLink to={`/category/${post.category}`}>{post.category}</StyledLink>；</span>)}
                    {post.tags && post.tags.length &&
                    <span>
                      标签:
                      {(post.tags || []).map((item, index) => {
                        return <Tag text={item} key={index}></Tag>
                      })}
                    </span>
                    }
                  )
                  </PostLabel>
                </PostItemContainer>
                })
              }
              </PostContainerInner>
            </YearItem>
          )
        })
      }
    </PostContainer>
  )
}
