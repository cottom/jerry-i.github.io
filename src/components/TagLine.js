import styled from 'styled-components'
import Tag from './Tag'
const Wrapper = styled.div`
  border-top: solid 1px #ddd;
`
export default function TagLine ({tags = []}) {
  const showTags = tags || []
  return (
    <Wrapper>
      {
        showTags.map((item, index) => <Tag key={index} text={item}/>)
      }
    </Wrapper>
  )
}
