import React from "react"
import styled from "styled-components"

const PersonTitle = ({ name, title }) => {
  return (
    <Container>
      <h3>{name}</h3>
      <h6>{title}</h6>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 0rem;
`

export default PersonTitle
