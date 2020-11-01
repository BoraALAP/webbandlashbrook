import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

import Enterence from "../pageComponents/enterence"
import Focused from "../pageComponents/focused"
import Founders from "../pageComponents/founders"
import FullImage from "../pageComponents/fullimage"
import Team from "../pageComponents/team"
import Projects from "../pageComponents/projects"
import Contact from "../pageComponents/contact"
import Crew from "../pageComponents/crew"

const IndexPage = ({
  data: {
    enterence,
    focused,
    contact,
    personOne,
    personTwo,
    personThree,
    personFour,
    personFive,
    team,
  },
}) => {

  return (
    <Layout title="Home">
      <FullImage featuredImage={enterence.childImageSharp.fluid} />
      <Enterence />
      <Projects />
      <Focused />
      <FullImage featuredImage={focused.childImageSharp.fluid} />
      <Team
        personOne={personOne.childImageSharp.fluid}
        personTwo={personTwo.childImageSharp.fluid}
        personThree={personThree.childImageSharp.fluid}
       
      />
      <Founders
        personFour={personFour.childImageSharp.fluid}
        personFive={personFive.childImageSharp.fluid}
      />
      {/* <Crew team={team.childImageSharp.fluid} /> */}
      <FullImage featuredImage={contact.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query PageQuery {
    enterence: file(relativePath: { eq: "enterence.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contact: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    focused: file(relativePath: { eq: "focused.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    personOne: file(relativePath: { eq: "personOne.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    personTwo: file(relativePath: { eq: "personTwo.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    personThree: file(relativePath: { eq: "personThree.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    personFour: file(relativePath: { eq: "personFour.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    personFive: file(relativePath: { eq: "personFive.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team: file(relativePath: { eq: "team.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
