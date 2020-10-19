import React from "react"
import styled from "styled-components"
import { Instagram, Facebook, Linkedin } from "react-feather"

const Social = ({color= "white"}) => {
  return (
    <Container>
      <a href="https://www.instagram.com/webbandlashbrook/" target="_blank">
        <Instagram color={color} size={24} />
      </a>
      <a href="https://www.facebook.com/webbandlashbrook/" target="_blank">
        <Facebook color={color} size={24} />
      </a>
      <a href="https://www.linkedin.com/company/webb-&-lashbrook/about/" target="_blank">
        <Linkedin color={color} size={24} />
      </a>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  justify-items: center;
  justify-content: end;
`

export default Social
