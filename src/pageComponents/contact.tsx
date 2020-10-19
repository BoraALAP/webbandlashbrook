import React from "react"
import styled from "styled-components"
import InnerContent from "../components/ui/element/innerContent"
import PageTitle from "../components/ui/element/pageTitle"

const Contact = props => {
  return (
    <Container id="contact">
    <InnerContent move={100}>
      <PageTitle>Contact</PageTitle>
      <One>
        <Left>
          Webb and Lashbrook Inc.
          <br />
          9 Barbara Crescent
          <br />
          East York, ON M4C 3B1
        </Left>
        <Right>
          <a href="tel:4168024272">416 802 4272</a>
          <br />
          <a href="mailto:info@webbandlashbrook.ca">info@webbandlashbrook.ca</a>
        </Right>
      </One>
      <Two>
      <h5>
        Join Our Team 
        </h5>
      <p>
        If you are interested in working with us, please email us at: <a href="mailto:jobs@webbandlashbrook.ca">jobs@webbandlashbrook.ca</a>
        </p>
      </Two>
    </InnerContent>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  margin-top: -150px;
  margin-bottom: 150px;

  @media screen and (min-width: 768px) {
    margin-top: -300px;
    margin-bottom: 300px;
    }
`

const One = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
  }
`

const Two = styled.div`
  display: grid;
`

const Left = styled.p`
  display: grid;
`

const Right = styled.div`
  display: grid;
  align-content: start;
  a{

  }
`

export default Contact
