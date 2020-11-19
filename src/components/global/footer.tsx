import React from "react"
import styled from "styled-components"
import { WLlogo } from "../assets/branding/WLlogo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Nav from "./nav"
import Social from "./social"

const Footer = props => {
  return (
    <Container>
      <Top>
      <AniLink paintDrip to="/" hex="#000">
        <WLlogo color="#fff" size="100px" />
        </AniLink>
        <Legal>
          <span>
            Ⓒ {new Date().getFullYear()} Webb &amp; Lashbrook Inc.<br />
            </span>
        <span>
          Build by <a href="https://www.artticfox.com" rel="noopenner" target="_blank">Arttic Fox</a>
          </span>
    </Legal>
      </Top>

    </Container>
  )
}

const Container = styled.footer`
  display: grid;
  grid-auto-flow: row;
  width: 100vw;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.black};
  padding: ${({ theme }) => theme.pagePaddingH};
  justify-items: center;
  grid-gap: 1.5rem;
  @media screen and (min-width: 768px) {
    justify-items: inherit;
    grid-gap: 0.5rem;
  }
`

const Top = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-content: space-between;
  grid-gap: 1.5rem;
  @media screen and (min-width: 768px) {
    grid-auto-flow:column;
    grid-gap: 1rem;
  }
`

const Legal = styled.small`
  display: grid;
  color: ${({ theme }) => theme.color.white};
  font-weight: 300;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  a{
    color: ${({ theme }) => theme.color.lightGrey};
    text-decoration: none;
  }
`

export default Footer
