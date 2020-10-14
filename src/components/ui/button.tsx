import React from "react"
import styled from "styled-components"

export const Button = ({ children }) => {
  return <ButtonS>{children}</ButtonS>
}

export const NavLink = ({ children, onClick }) => {
  return <NavLinkS onClick={onClick}>{children}</NavLinkS>
}

const ButtonS = styled.button`
padding: 1rem 2rem;
`

const NavLinkS = styled.button`
  display: grid;
  color: ${({ theme }) => theme.color.white};
  font-size: 0.75rem;
  padding: 1rem 1.5rem;
  @media screen and (min-width: 768px) {
  padding: 0.5rem 1.5rem;
  }
`
