import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const FullImage = ({ featuredImage, alt }) => {
  console.log(featuredImage)

  return <Container image={featuredImage} alt={alt} />
}

const Container = styled(GatsbyImage)`
  max-height: 70vh;
`

export default FullImage
