import React from "react"
import styled from "styled-components"
import { WLlogo } from "../components/assets/branding/WLlogo"
import InnerContent from "../components/ui/element/innerContent"

const Enterence = props => {
  return (
    <Container id="enterence">
      <Content >
        <Left>
          <h5 >
            Your dream home and an architect’s vision meet in the hands of the
            tradesperson. Our unique expertise in complex contemporary
            renovation and building is rooted in respect for architecture,
            design and true partnership with our clients.
          </h5>
          <h1>We deliver modern craftsmanship</h1>
        </Left>
        <Right>
          <Logo>
            <WLlogo size="125px" color="#fff" />
          </Logo>
          <Bg />
        </Right>
      </Content>
      <BgContainer />
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  top: -150px;
  z-index: 100;
  margin-bottom: -200px;
  padding-top: 100px;
  position: relative;
  @media screen and (min-width: 768px) {
    top: -200px;
    padding-top: 100px;
    margin-bottom: -300px;
  }
`

const Content = styled.div`
  display: grid;
  margin: 0px 5vw 0px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin: 0px 10vw 0px;
    grid-auto-flow: column;
  }
`

const Left = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.color.white};
  padding: 5vw;
  z-index: 500;
  position: relative;
  grid-gap: 2.5rem;

  @media screen and (min-width: 768px) {
    padding: 5vw 2.5vw 2.5vh 5vw;
  }
`

const Right = styled.div`
  display: none;
  padding: 3rem 1rem;
  align-items: start;
  position: relative;
  width: 150px;
  @media screen and (min-width: 768px) {
    display: grid;
    top: -125px;
  }
`

const Logo = styled.div`
  display: grid;
  transform: rotate(90deg);
  justify-content: center;
  align-content: center;
  z-index: 150;
`

const BgContainer = styled.div`
  display: grid;

  background-color: ${({ theme }) => theme.color.white};
  z-index: 300;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 200px;
`

const Bg = styled.div`
  position: absolute;
  display: grid;
  background-color: ${({ theme }) => theme.color.black};
  width: 100%;
  height: 300px;
  z-index: 100;
  transform: skewY(-25deg);
`
export default Enterence
