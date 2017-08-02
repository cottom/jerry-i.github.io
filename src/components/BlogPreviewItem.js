import styled from 'styled-components'
import StyledLink from './StyleLink'
import TagLine from './TagLine'
import { rhythm } from '../utils/typography';
const { PRIMARY_COLOR } = require('../../config')
const PreviewItem = styled.div`
  position: relative;
`

const Title = styled.h3`
  margin-top: ${rhythm(0.4)};
`
const Excerpt = styled.p`

`

const ArticleDate = styled.div`
  font-size: 14px;
  color: #666;
  .cottom-icon-calendar2 {
    margin-right: ${rhythm(0.2)};
  }
`

const EndLine = styled.div`
  height: 28px;
  position: relative;
`

const ReadMore = styled(StyledLink)`
  position: absolute;
  right: ${rhythm(0.5)};
  top: 50%;
  transform: translateY(-50%);
  font-size: ${rhythm(0.4)};
  border: solid 1px #ddd;
  border-radius: 10px;
  padding: 0 ${ rhythm(0.3)};
  line-height: 1.4;
  transition: all 0.2s;
  color: #999;
  &:hover {
    color: ${PRIMARY_COLOR};
    border-color: ${PRIMARY_COLOR};
  }
`

export default function BlogPreviewItem({ title, date, tags = [], path, excerpt, timeToRead }) {
  return (
    <PreviewItem>
      <Title>{title}</Title>
      <ArticleDate><i className={'cottom-iconfont cottom-icon-calendar2'}></i>{date}</ArticleDate>
      <Excerpt>{excerpt}</Excerpt>
      <EndLine>
        <TagLine tags={tags}></TagLine>
        <ReadMore to={path}>More</ReadMore>
      </EndLine>
    </PreviewItem>
  )
}
