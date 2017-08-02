import styled from 'styled-components'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography';

const { PRIMARY_COLOR } = require('../../config')

const TagLink = styled(Link)`
  color: ${PRIMARY_COLOR};
  margin-right: ${rhythm(0.3)};
  font-size: ${rhythm(0.2)};
  transition: all 0.4s;
  &:hover {
    text-decoration: none;
    opacity: 0.7;
  }
`
export default function (props) {
  const {text, className} = props
  return <TagLink className={`cottom-iconfont cottom-icon-label_fill ${className || ''}`} to={`/tag/${text}`} >{text}</TagLink>
}
