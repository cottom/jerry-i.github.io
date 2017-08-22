import styled from 'styled-components'
import Helmet from 'react-helmet';
import StyleLink from '../components/StyleLink'

import { rhythm } from '../utils/typography';
const Wrapper = styled.section`
  padding: ${rhythm(0.2)};
`

const Line = styled.div`
  line-height: 2;
  border-bottom: dashed #eee 1px;
`

const LineLabel = styled.label`
  color: #aaa;
  width: ${rhythm(4)};
  display: inline-block;
`

const LineDes = styled.span`
  padding-left: ${rhythm(0.4)};
`

export default function AboutPage()  {
  return (
    <Wrapper>
      <Helmet>
        <title>About | Cottom's Blog</title>
      </Helmet>
      <Line>
        <LineLabel>nickname:</LineLabel>
        <LineDes>cottom</LineDes>
      </Line>
      <Line>
        <LineLabel>profession:</LineLabel>
        <LineDes>Web Developer</LineDes>
      </Line>
      <Line>
        <LineLabel>github:</LineLabel>
        <LineDes><a href="https://github.com/jerry-i">jerry-i</a></LineDes>
      </Line>
    </Wrapper>
  )
}
