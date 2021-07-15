import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import PersonTitle from "./element/personTitle"

const TeamCard = ({ name, title, children, featuredImage }) => {
  return (
    <Container>
      <GatsbyImage image={featuredImage} alt="Team Image" />
      <PersonTitle name={name} title={title} />

      <p>{children}</p>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  align-items: start;
  align-content: start;

  @media screen and (min-width: 768px) {
    max-width: 33vw;
  }
`

export default TeamCard
