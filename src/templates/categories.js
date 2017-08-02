import styled, {css} from 'styled-components'
import Helmet from 'react-helmet';
import StyledLink from '../components/StyleLink'
import { rhythm } from '../utils/typography'
import BlogYearList from '../components/BlogYearList'

const Wrapper = styled.section`

`

const CategoryContainer = styled.div`
  background-color: hsla(0,0%,0%,0.04);
  padding: ${rhythm(0.4)};
  font-size: ${rhythm(0.5)};
`
const CategoryItem = styled(StyledLink)`
  padding: ${rhythm(0.2)};
  ${props => props.active && css`
    background-color: #ddd;
  `}
`


export default function categoriesPage({pathContext: { category, categories , posts }}) {
  return (
    <Wrapper>
    <Helmet
      title={`Category:${category} - Cottom's Blog`} />
      <CategoryContainer>
        {
          categories.map((item, index) => {
            return (<CategoryItem key={index} active={item === category} to={`/category/${item}`}>{item}</CategoryItem>)
          })
        }
      </CategoryContainer>
      <BlogYearList posts={posts}></BlogYearList>
    </Wrapper>
  )
}
