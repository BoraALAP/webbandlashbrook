import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const FullImage = ({ featuredImage }) => {
  return <Container fluid={featuredImage} />
}

const Container = styled(Img)`
  max-height: 70vh;
`

export default FullImage
