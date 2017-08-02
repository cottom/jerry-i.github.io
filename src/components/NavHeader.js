
import styled, {css} from 'styled-components'
import StyleLink from './StyleLink'
const { NAV_TABS, PRIMARY_COLOR} = require('../../config')

const Header = styled.header`
  position: relative;
  border-bottom: 1px solid #ddd;
`

const NavLine = styled.div`
  margin: 0 0 -1px;
  position: absolute;
  right: 0;
  bottom: 0;
`

const NavItem = styled(StyleLink)`
  display: inline-block;
  line-height: 30px;
  color: #444;
  border-bottom: 1px solid #ddd;
  padding: 0 10px;
  &:hover {
    box-shadow: 0 -2px 0 #ddd;
  }
  ${
    props => props.active && css`
      border: 1px solid #ddd;
      border-bottom-color: #fff;
      color: ${PRIMARY_COLOR}
    `
  }
`

const StyledIcon = styled.i`
  &.cottom-iconfont {
    font-size: 14px;
    margin-right: 4px;
  }
`


export default function NavHeader({active = ''}) {
  return (
    <Header>
      <NavLine>
        {
          NAV_TABS.map((item, index) => {
            return (
              <NavItem key={index} to={item.path} active={item.activePath && item.activePath.test(location.pathname)}><StyledIcon className={`cottom-iconfont ${item.icon}`}></StyledIcon>{item.name}</NavItem>
            )
          })
        }
      </NavLine>
    </Header>
  )
}
