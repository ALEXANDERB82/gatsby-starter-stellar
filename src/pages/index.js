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
                <li><Link to="Butler_resume_.pdf" className="button" >Full Resume</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Goals</h2>
            </header>
              <p>Short Term: I want to find an internship at a company that develops videogames so I can learn more firsthand about the
              process of creating videogames from the ground up.</p>
              <p>Long Term: I will eventually find a job at a company that
              designs videogames, and use the money I earn from that job to start my own videogame design company.</p>
              <p>Dreams: I would love to work for the company From Software because I love the approach they have taken to creating videogames.
              They have created games that were drastically different from other games that were being created at the time. They create games
              that have essentially changed the world and created their own genre of game. After I quit my job at From Software I will create my own
              company named "Red Owl" that will make videogames capable of changing the world forever.</p>
            <img src={fs} alt="From Software" class = "center"/>
            <p></p>
            <footer className="major">
            </footer>
          </section>

          <section id="third" className="main special">
            <div className="content">
              <header className="major">
                <h2>Blog</h2>
                <h3><b>CMPSC 481 Gator Grader Project</b></h3>
              </header>
              <p>Gator Grader is a tool used to check the work of programmers. Specifically
              it is used at Allegheny College for checking the assignments of students
              in the compter science department. Gator Grader has many chekcs to ensure
              that the assigment being evaluated is up to the standards on the instructor.
              During the Computer Science 481 course I worked with my entire class in order
              to improve the Gator Grader software. We split up into smaller groups that
              each tackled different issues of Gator Grader. Within my group we first tackled
              issue 81 which saught to create a general purpose markdown parser instead of
              using regular expressions. We created a parser that was able to discern
              paragraphs from other elements in markdown. After completing this task
              my team split up into smaller teams in order to handle seperate issues
              one team worked to create more elements to the parser soo it can discern
              other elements besides just paragraphs. While on the other hand my team worked
              on different issues within Gator Grader. I worked on adding the key features
              to the top of the ReadMe file. This involved doing a little research into
              figuring out what specifically Gator Grader does. After this towards the end
              of this project I reviwed some of the pull requests that were made and
              approved some of them to be merged into the master. Through the complettion
              of the project I didnt run into too many challenges. The main challenge that
              I ran into was when researching Commonmark for the markdown parser.
              Commonmark does not have any documentation so it was challenging to understand
              at first what functions within Commonmark would need to be implemented
              to succefully create our markdown parser. Overall I enjoyed working with Gator Grader
              and hope to work with more software like this in the future.
              </p>

              <h3><b>CMPSC 481 deltacov</b></h3>
              <p>
              For this software project my group was tasked with the creation of a course survey. The
              way the survey is supposed to operate is similar to how google forms works.
              It's serves as a system in which professors are able to create a survey for students to take
              however there is one main difference between ours and google forms.Which is that with ours
              the creator of the survey can dynamically save the responses in a database so that the
              creator does not have to keep redownloading responses if new ones are added after
              they already downloaded them previously. I worked on a few things mainly in our project.
              First I was resposible for making sure that we are all adhering to the same coding standards
              as we moved to complete our project. In order to do this I made sure to set up the formating
              and linting tools as well as TravisCI and Codecov.io. In terms of linting tools We used; pylint
              and flake8. In order to add the linting tools I had to install all of them using pip for example
              using the comand; <code>pip install pylint</code> in the terminal. For formating tools we used
              black and I installed it also using pip like the above example. I integrated travisCI with our
              project in order to have automating formating and linting with each commit that is made so that
              every commit and change made is held to the same standard.


               In the beginning of the project I was responsible for
              making sure things were set up such as linting tools. I made sure that the formatting
              tool black was setup as well as the linting tools; pylint, flake8, I also made sure
              codecov.io was set up. Since I was in charge of adding these tools it made sense that
              I would also handle integrating travisCI with our program. I made sure that Travis ran
              the linting tools that I had added to the repository. This helped us make sure that all of our code was held to the same standard by automatically running the tools mentioned before with each
              commit that is made. Below is the link for the Pull request that demonstrates these changes.
              Next I wanted to make sure that a little more was set up for github so that we could
              effectively make changes to the repository and have them be consistent. I noticed that
              there was an issue created for the lack of issue tracker template and also a pull request
              template. In order to create these I first did a little research on what good pull request
              and issue tracker templates look like. After this I went through github under the settings
              there is a section to create templates. Using what I learned from my research I created
              simple yet effective templates that would help us be consistent in our coding and
              more efficient. The issue that this solved and a link to the github folder where the
              templates are located can be found below.
              For the rest of the project we have all slowly been tackling the project the best we can.
              We ran into problems at first trying to use django in order to make the web app, mainly
              because none of us had any experience using django. After this we decided to use flask instead
              because other groups in the class were also using this and it made it easier to get assistance
              if we needed it. However we still didn't get to completely finish the project as intended.
              A combination of not having a lot of time in order to complete the project and our small amount
              of experience using flask made it hard to get it done.
              </p>
            </div>
            <ul className="statistics">
            </ul>

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
