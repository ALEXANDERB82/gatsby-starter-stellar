import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'
import resume from '../assets/images/resume.png'
import resume2 from '../assets/images/resume2.png'

class Generic extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={"Alexander Butler - Portfolio"} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <img src={resume} alt="" />
            <img src={resume2} alt="" />
          </section>
        </div>

      </div>
    )
  }
}

export default Generic

export const pageQuery = graphql`
  query GenericQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
