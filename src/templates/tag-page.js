import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import styled from 'styled-components'
import Tag from '../components/Tag'
import BlogYearList from '../components/BlogYearList'
import { rhythm, scale } from '../utils/typography'

const Container = styled.div`
  padding: 1rem;
`
const StyledTag = styled(Tag)`
  padding: ${rhythm(0.2)};
  color: #444;
  font-size: ${rhythm(0.5)};
  &.active{
    color: #2d95f7;
    background-color: #ddd;
  }
`

const TagsContainer = styled.div`
  background-color: hsla(0,0%,0%,0.04);
  padding: ${rhythm(0.4)}
`

export default function TagPages({pathContext: {tags, tag, posts }}) {
  const showTags = tags || []
  return (
    <Container>
      <Helmet
        title={`Tag:${tag} - Cottom's Blog`}/>
      <TagsContainer>
        {
          showTags.map((item, index) => {
            return <StyledTag key={index} className={item === tag ? 'active': ''} text={item}></StyledTag>
          })
        }
      </TagsContainer>
      <BlogYearList posts={posts}></BlogYearList>
    </Container>
  )
}
