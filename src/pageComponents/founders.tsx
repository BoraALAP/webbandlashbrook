import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import PersonTitle from "../components/ui/element/personTitle"

const Founders = ({ personFour, personFive }) => {
  return (
    <Container>
      <Left>
        <GatsbyImage image={personFour} alt="chris lashbrook" />
        <GatsbyImage image={personFive} alt="andy webb" />
      </Left>
      <Right>
        <PersonTitle name="Chris Lashbrook + Andy Webb" title="Co-founders" />
        <P>
          Andy Webb and Chris Lashbrook founded Webb &amp; Lashbrook Inc. in
          2006. They each came from different backgrounds that formed an
          excellent mix of trade and business skills. Andy brought 30 years of
          exquisite carpentry skills to the table while Chris directed his 30
          years of business management skills into a new adventure. Together,
          they built a trusted brand based on high quality communication and
          execution that rounds out the creative team so important to a
          successful project. This continues to place Webb &amp; Lashbrook in
          the strategic niche most desired and respected within the
          architectural community, as active partners with both the architects
          and their clients, to bring a project to the desired functional and
          aesthetic conclusion.
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
