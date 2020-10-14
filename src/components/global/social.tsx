import React from "react"
import styled from "styled-components"
import { Instagram, Facebook } from "react-feather"

const Social = props => {
  return (
    <Container>
      <a href="https://www.instagram.com/webbandlashbrook/" target="_blank">
        <Instagram color="white" size={24} />
      </a>
      <a href="https://www.facebook.com/webbandlashbrook/" target="_blank">
        <Facebook color="white" size={24} />
      </a>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  justify-items: center;
  justify-content: space-between;
`

export default Social
