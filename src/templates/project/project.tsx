import BlockContent from "@sanity/block-content-to-react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import React, { FunctionComponent } from "react"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../../components/layout/layout"
import { ChevronLeft } from "react-feather"
import SEO from "../../components/seo"
import { IProject } from "../../contracts/projects/project/iproject"
import PageTitle from "../../components/ui/element/pageTitle"
import InnerContent from "../../components/ui/element/innerContent"
import { Button } from "../../components/ui/button"

const Project: FunctionComponent<{
  data: { sanityProject: IProject; allSanityProject }
}> = ({ data }) => {
  const thisEdge = data.allSanityProject.edges.find(
    edge => edge.node._id === data.sanityProject._id
  )


  
  

  return (
    <Layout
      title={data.sanityProject.title}
      description={data.sanityProject.description}
    >
      <ImgS fluid={data.sanityProject.mainImage.asset.fluid} />
      <InnerContent move={-50}>
        <PageTitle>{data.sanityProject.title}</PageTitle>
        <div>
          <Row>
            <h6>Architect:</h6>
            <span>{data.sanityProject.architect}</span>
          </Row>
          <Row>
            <h6>Photographer:</h6>
            <span>{data.sanityProject.photographer}</span>
          </Row>
        </div>
      </InnerContent>
      <Container>
        <Images>
          {data.sanityProject.imagesGallery.map(image => {
            return (
              <ImgC
                fluid={image.asset.fluid}
                ratio={image.asset.fluid.aspectRatio}
                key={image.asset._id}
              />
            )
          })}
        </Images>
        {/* <div >
          <p >Description</p>
          <p >{data.sanityProject.description}</p>
        </div> */}

        {/* <div >
          <div>
            <BlockContent blocks={data.sanityProject._rawBody} />
          </div>
        </div> */}
        {
         thisEdge && (
          <Buttons>
            {thisEdge.previous && thisEdge.previous.slug && (
              <Anilink
                to={`/project/${thisEdge.previous.slug.current}`}
                paintDrip
                hex="#000"
                key={thisEdge._id}
              >
                <Button>Previous</Button>
              </Anilink>
            )}
            {thisEdge.next && thisEdge.next.slug && (
              <Anilink
                to={`/project/${thisEdge.next.slug.current}`}
                paintDrip
                hex="#000"
                key={thisEdge._id}
              >
                <Button>Next</Button>
              </Anilink>
            )}
          </Buttons>
        )}

        <GoBack>
          <button onClick={()=> window.history.back()}>
            <ChevronLeft color={"#000"} />
            Back
          </button>
        </GoBack>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: grid;
  padding: 0 5vw 5vw;
`

const ImgS = styled(Img)`
  display: grid;
  height: 60vh;
`

const ImgC = styled(Img)`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-column: ${props => props.ratio > 1 && "span 2"};
  }
`

const GoBack = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  position: fixed;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.5rem 1rem;
  right: 5vw;
  top: 90px;
  z-index: 400;
  button {
    
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
  }
`

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-gap: 0.5rem;
  h6 {
    font-size: 0.875rem;
  }
`

const Images = styled.div`
  display: grid;
  grid-gap: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
    padding: 2rem;
    grid-gap: 2rem;
`

const Next = styled.div`
  display: grid;
`

const Prev = styled.div`
  display: grid;
`

export default Project

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    allSanityProject {
      edges {
        node {
          _id
        }
        next {
          title
          slug {
            current
          }
          _id
        }
        previous {
          _id
          title
          slug {
            current
          }
        }
      }
    }
    sanityProject(id: { eq: $id }) {
      _id
      title
      description
      architect
      photographer
      _rawBody
      slug {
        current
      }
      tags {
        _id
        title
      }
      mainImage {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imagesGallery {
        asset {
          _id
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
