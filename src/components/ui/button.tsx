import React from "react"
import styled from "styled-components"

interface Props {
  onClick?: Function
  children: any
  Secondary?: Boolean
}

export const Button = ({ children, onClick, Secondary }: Props) => {
  return (
    <ButtonS onClick={onClick} Secondary={Secondary}>
      {children}
    </ButtonS>
  )
}

export const NavLink = ({ children, onClick }: Props) => {
  return <NavLinkS onClick={onClick}>{children}</NavLinkS>
}

const ButtonS = styled.button`
  padding: 1rem 2rem;
  border: ${props => props.Secondary && `1px solid ${props.theme.color.grey}`};
  width: fit-content;
`

const NavLinkS = styled.button`
  display: grid;
  color: ${({ theme }) => theme.color.white};
  font-size: 0.875rem;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  @media screen and (min-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`
