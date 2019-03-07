import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'
import fs from '../assets/images/fs.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={"Alexander Butler - Home"} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>I am currently a Computer Science major and a Spanish minor at Allegheny College. I currently have a job at
                Starbucks as a barista with the hopes of soon finding an internship hopefully one to do with the field of Video
                Game design. Ever since I was young I have had a fascination with Video Games and their ability to allow people
                to live lives completely different to the one they are currently living. I hope to one day design a video game that is
                able to change the world.</p>

              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Portfolio</h2>
            </header>
            <ul className="features">
              <li>
                <h3></h3>
                <p>Click on the link below to see my full resume.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Full Resume</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Goals</h2>
              <p>Short Term: I want to find an internship at a company that develops videogames so I can learn more firsthand about the
              process of creating videogames from the ground up.</p>
              <p>Long Term: I will eventually find a job at a company that
              designs videogames, and use the money I earn from that job to start my own videogame design company.</p>
              <p>Dreams: I would love to work for the company From Software because I love the approach they have taken to creating videogames.
              They have created games that were drastically different from other games that were being created at the time. They create games
              that have essentially changed the world and created their own genre of game. After I quit my job at From Software I will create my own
              company named "Red Owl" that will make videogames capable of changing the world forever.</p>
            </header>
            <ul className="statistics">
            <img src={fs} alt="" class = "center"/>
            </ul>
            <p></p>
            <footer className="major">
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
