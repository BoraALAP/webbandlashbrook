import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import PersonTitle from "../components/ui/element/personTitle"

const Founders = ({ personFour, personFive }) => {
  return (
    <Container>
      <Left>
        <Img fluid={personFour} />
        <Img fluid={personFive} />
      </Left>
      <Right>
        <PersonTitle name="Chris Lashbrook + Andy Webb" title="Co-founders" />
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          purus sed odio vestibulum efficitur. Integer id ligula faucibus,
          accumsan lectus vitae, dignissim elit. Cras at volutpat eros, ut
          iaculis quam. Aenean non scelerisque orci, porta tempor nulla. Nulla
          justo lectus, elementum non est in, eleifend accumsan nibh. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel purus
          sed odio vestibulum efficitur. Integer id ligula faucibus, accumsan
          lectus vitae, dignissim elit. Cras at volutpat eros,
        </P>
      </Right>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  grid-gap: 2px;
  margin: 5vw 10vw;
  grid-auto-flow: row;
  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
    grid-auto-flow: column;
      ;
    }
`

const Left = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-auto-flow: row;
`

const Right = styled.div`
  display: grid;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  padding: 5vw;
  align-items: center;
    align-content: center;
`

const P = styled.p`
  display: grid;
  color: ${({ theme }) => theme.color.white};
`

export default Founders
