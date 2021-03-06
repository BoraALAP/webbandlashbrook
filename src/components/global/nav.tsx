import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { NavLink } from "../ui/button"

const Nav = ({scrolled,onClick}) => {
  return (
    <Container scrolled={scrolled} onClick={onClick}>
      <NavLink onClick={() => {scrollTo("#enterence")}}>Home</NavLink>
      <NavLink onClick={() => {scrollTo("#projects")}}>Projects</NavLink>
      <NavLink onClick={() => {scrollTo("#about")}}>About</NavLink>
      <NavLink onClick={() => {scrollTo("#team")}}>Team</NavLink>
      <NavLink onClick={() => {scrollTo("#contact")}}>Contact</NavLink>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  
  grid-auto-flow: row;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-auto-flow:column;

    button{

      color: ${props => props.scrolled ? props.theme.color.white : props.theme.color.black};
      transition: all 0.75s ease-in-out;
    }
  }
`

export default Nav
