import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import PersonTitle from "../components/ui/element/personTitle"

const Crew = ({ team }) => {
  return (
    <Container>
      <GatsbyImage image={team} alt="Crew Image" />
      <PersonTitle
        name="The Crew Name"
        title="Name1 from left to right, name, name"
      />
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  margin: 10vw;
  grid-gap: 1rem;
`

export default Crew
