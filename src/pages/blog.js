import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'



class blog extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

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

export default blog

export const pageQuery = graphql`
  query GenericQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
