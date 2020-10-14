import React, { useState, useEffect } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Instagram } from "react-feather"
import { WLlogo, WLLogoExpend } from "../assets/branding/WLlogo"


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

  return (
    <HeaderS expanded={expanded} scrolled={scrolled}>
      <AniLink paintDrip to="/" hex="#000">
        <Logo>
          {scrolled ? <LogoS color="#fff" /> : <WLLogoExpend color="#000" />}
        </Logo>
      </AniLink>
      
        
        <NavS>
          <a href="https://www.instagram.com/webbandlashbrook/" target="_blank">
            <Instagram color={scrolled ? "white" : "black"} size={24} />
          </a>
          {/* <Link to="/#projects">Projects</Link> */}
        </NavS>
        {/* <MobileIcon onClick={() => setExpanded(!expanded)}>
        <IconMenu />
      </MobileIcon> */}
      
    </HeaderS>
  )
}

const HeaderS = styled.header`
  display: grid;
  width: 100vw;
  background-color: ${props =>
    props.scrolled ? props.theme.color.black : "transparent"};
  z-index: 1000;
  justify-content: start;
  align-content: center;
  padding: ${({ theme }) => theme.pagePaddingH};
  grid-template-columns: auto auto;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.75s ease-in-out;
`

const Logo = styled.div`
  display: grid;
  justify-content: start;
`

const LogoS = styled(WLlogo)`
  width: 80px;
  height: 80px;
`



const NavS = styled.nav`
  display: grid;
  grid-gap: 1em;
  grid-auto-flow: column;
`

export default Header
