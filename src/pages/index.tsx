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
  console.log(enterence)

  return (
    <Layout title="Home">
      <FullImage
        featuredImage={enterence.childImageSharp.gatsbyImageData}
        alt={`Kitchen Image`}
      />
      <Enterence />
      <Projects />
      <Focused />
      <FullImage
        featuredImage={focused.childImageSharp.gatsbyImageData}
        alt={`Red Cabinets`}
      />
      <Team
        personOne={personOne.childImageSharp.gatsbyImageData}
        personTwo={personTwo.childImageSharp.gatsbyImageData}
        personThree={personThree.childImageSharp.gatsbyImageData}
      />
      <Founders
        personFour={personFour.childImageSharp.gatsbyImageData}
        personFive={personFive.childImageSharp.gatsbyImageData}
      />
      {/* <Crew team={team.childImageSharp.fluid} /> */}
      <FullImage
        featuredImage={contact.childImageSharp.gatsbyImageData}
        alt={`Close-up steel Deck`}
      />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query PageQuery {
    enterence: file(relativePath: { eq: "enterence.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    contact: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    focused: file(relativePath: { eq: "focused.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    personOne: file(relativePath: { eq: "personOne.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    personTwo: file(relativePath: { eq: "personTwo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    personThree: file(relativePath: { eq: "personThree.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    personFour: file(relativePath: { eq: "personFour.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    personFive: file(relativePath: { eq: "personFive.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    team: file(relativePath: { eq: "team.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
