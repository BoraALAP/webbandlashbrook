import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import PersonTitle from "../components/ui/element/personTitle";

const Crew = ({ team }) => {
  
  return (
    <Container>
        <Img fluid={team} />
    <PersonTitle name="The Crew Name" title="Name1 from left to right, name, name"  />
    </Container>
  )
}


const Container = styled.section`
display: grid;
  margin: 10vw;
  grid-gap: 1rem
  `

export default Crew
