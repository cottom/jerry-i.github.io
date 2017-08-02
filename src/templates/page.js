import styled from 'styled-components'
import Helmet from 'react-helmet';
import { rhythm } from '../utils/typography'
import PreviewItem from '../components/BlogPreviewItem'
import Pagination from '../components/Pagination'


const Container = styled.div`
  padding: 1rem
`

export default function PageIndex({ data = {}, pathContext}) {
  const { total, index, posts: _posts, pageNum } = pathContext
  const posts = _posts.map(item => {
    const {excerpt, frontmatter, timeToRead } = item.node
    return {
      excerpt,
      timeToRead,
      ...frontmatter
    }
  })
  return (
   <Container>
     <Helmet
       title={`Cottom's Blog - Page${index}`}
       meta={[
         {
           name: 'description',
           content: 'basic blog description'
         }
       ]}
     >
     </Helmet>
     {posts.map(postItem => {
      return (
        <PreviewItem
          {...postItem}
          key={postItem.path}
          path={`/blog${postItem.path}`}
        ></PreviewItem>
      )
     })}
    <Pagination
      total={total}
      index = {index}
      pageNum = {pageNum}
    ></Pagination>
   </Container>
  )
}
