import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import NavHeader from '../components/NavHeader'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <NavHeader></NavHeader>
        {children()}
      </Container>
    )
  }
}
Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
