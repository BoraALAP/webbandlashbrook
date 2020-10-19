import React, { useState, useEffect } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Instagram, Menu, X } from "react-feather"
import { WLlogo, WLLogoExpend } from "../assets/branding/WLlogo"

import Nav from "./nav"
import Social from "./social"

const Header = () => {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  const listenScrollEvent = e => {
    if (window.scrollY > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const handleNav = () => {
    setExpanded(false)
  }

  return (
    <HeaderS scrolled={scrolled}>
      <AniLink paintDrip to="/" hex="#000">
        <Logo>
          {scrolled ? <LogoS color="#fff" size="40px" /> : <WLLogoExpend color="#000" />}
        </Logo>
      </AniLink>
      <NavItemS expanded={expanded}>
        <Nav scrolled={scrolled} onClick={handleNav}/>
      </NavItemS>
      <MobileIcon onClick={() => setExpanded(!expanded)}>
        {expanded ? <X color={ scrolled ? "#fff": "#000" } /> : <Menu color={ scrolled ? "#fff": "#000" } />}
      </MobileIcon>
      <Social color={scrolled ? "#fff" : "#000" }/>
      {/* <Link to="/#projects">Projects</Link> */}
    </HeaderS>
  )
}

const HeaderS = styled.header`
  display: grid;
  width: 100vw;
  background-color: ${props =>
    props.scrolled ? props.theme.color.black : "transparent"};
  z-index: 1000;
  align-content: center;
  padding: ${({ theme }) => theme.pagePaddingH};
  grid-template-columns: auto auto auto;
  position: fixed;
  justify-content: space-between;
  transition: all 0.75s ease-in-out;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.75s ease-in-out;
  grid-template-areas: "logo menuIcon instagram" 
                      "menu menu menu";
                     
  @media screen and (min-width: 768px) {
    grid-template-areas: "logo menu instagram";
    grid-template-columns: 1fr auto 1fr;
    justify-content: space-evenly;
    }
`

const Logo = styled.div`
  display: grid; 
  justify-content: start;
  grid-area: logo;
`

const LogoS = styled(WLlogo)`
  width: 80px;
  height: 80px;
`

const InstagramS = styled.a`
  display: grid;
  grid-area: instagram;
  justify-items: end;
`

const MobileIcon = styled.div`
  display: grid;
  justify-content:center;
  grid-area: menuIcon;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
const NavItemS = styled.div`
    grid-area: menu;
  display: grid;
  transition: all 0.75s ease-in-out;
  position: absolute;
  background: ${({ theme }) => theme.color.black};
  width: 100%; 

  padding: ${props =>
    props.expanded ? "2rem 0": "0rem 0rem"};
  top: ${props =>
    props.expanded ? "60px" : " -100vh"};


    @media screen and (min-width: 768px) {
        position: initial;
        background: transparent;
        width: auto;
        padding: 0px;
        top: inherit;
      }
`

export default Header
