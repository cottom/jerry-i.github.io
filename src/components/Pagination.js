import styled, {css} from 'styled-components'
import StyledLink from './StyleLink'
import { rhythm } from '../utils/typography';
const { PAGE_SIZE, PRIMARY_COLOR } = require('../../config')

const Pagination = styled.div`
 padding: 1px;
 text-align: center;
`

const LinkBtnItem = styled(StyledLink)`
  display: inline-block;
  background-color: #fff;
  width: ${rhythm(0.8)};

  &:hover {
    opacity: 0.8;
  }
  &.active {

  }
  ${
    props => props.active && css`
      color: ${PRIMARY_COLOR};
    `
  }
`


const PreOrNext = styled(StyledLink)`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  ${
    props => props.disabled && css`
      background-color: ${PRIMARY_COLOR};
      color: #fff;
    `
  }
`
const DisabledLink = styled.span`
  color: #ddd;
  cursor: pointer;
`

const PreOrNextBtn = (props) => {
  const {disabled} = props
  return disabled ? <DisabledLink {...props} /> : <LinkBtnItem {...props}/>
}

export default function PaginationComponent({total, index, pageNum}) {
  if (total <= PAGE_SIZE) return <Pagination/>
  const PRE_FLAG = '<<';
  const NEXT_FLAG = '>>';
  const sideShowCount = Math.floor( PAGE_SIZE / 2) - 1
  const showPreMore = pageNum > PAGE_SIZE && index - sideShowCount > 2
  const showNextMore = pageNum > PAGE_SIZE && index + sideShowCount < pageNum - 1
  let startNum, endNum
  const pageArr = []
  if (showPreMore && showNextMore) {
    startNum = index - sideShowCount
    endNum = index + sideShowCount
    for (let i = index - sideShowCount; i < index + sideShowCount + 1; i++) pageArr.push(i)
  } else if (showPreMore && !showNextMore) {
    for (let i = pageNum - PAGE_SIZE + 2; i < pageNum; i++) pageArr.push(i)
  } else if (!showPreMore && showNextMore) {
    for (let i = 2; i < PAGE_SIZE ; i++) pageArr.push(i)
  } else {
    for (let i = 2; i < pageNum; i++) pageArr.push(i)
  }
  return (

    <Pagination>
      {
        pageNum > 1 && <PreOrNextBtn disabled={index === 1} to={ (index - 1) === 1 ? '/' : `/page/${index - 1}`} className="cottom-iconfont cottom-icon-qiehuanqizuo"></PreOrNextBtn>
      }
      {
        pageNum > 0 && <LinkBtnItem title="1" active={index === 1} to='/'>1</LinkBtnItem>
      }
      {
        showPreMore && <LinkBtnItem title={PRE_FLAG} to={`/page/${pageArr[0] - 1}`}>{PRE_FLAG}</LinkBtnItem>
      }
      {
        pageArr.map(item => <LinkBtnItem key={item} active={index === item} title={item} to={`/page/${item}`}>{item}</LinkBtnItem>)
      }
      {
        showNextMore && <LinkBtnItem title={NEXT_FLAG} to={`/page/${pageArr[pageArr.length - 1] + 1}`}>{NEXT_FLAG}</LinkBtnItem>
      }
      {
        pageNum > 1 && <LinkBtnItem title={pageNum} active={index === pageNum} to={`/page/${pageNum}`}>{pageNum}</LinkBtnItem>
      }
      {
        pageNum > 1 && <PreOrNextBtn disabled={index === pageNum} to={`/page/${index + 1}`} className="cottom-iconfont cottom-icon-qiehuanqiyou"></PreOrNextBtn>
      }
    </Pagination>
  )
}
