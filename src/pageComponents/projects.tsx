import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import { GetAllProjects } from "../hooks/projects/get-projects-graphql"
import PageTitle from "../components/ui/element/pageTitle"

const Projects = props => {
  const { allSanityProject } = GetAllProjects()


  return (
    <Container id="projects">
     <PageTitle>Projects</PageTitle>
      {/* <ProjectsSection /> */}
      {/* <ResponsiveMasonry
                columnsCountBreakPoints={{375: 1, 768: 2, 900: 3}}
            >
                <Masonry gutter={'2rem'}> */}
      <Content>

      {allSanityProject &&
        allSanityProject.nodes.map((node,index) => {
          return (
            <Anilink
              to={`/project/${node.slug.current}`}
              paintDrip
              hex="#000"
              key={node._id}
              id={`d${index}`}
            >
              <CardContainer>
                <ImgC fluid={node.mainImage.asset.fluid} />
                <Text>
                  <h6>{node.title}</h6>
                  <Divider />
                  <button>View Project</button>
                </Text>
              </CardContainer>
            </Anilink>
          )
        })}
      </Content>

    </Container>
  )
}

const Container = styled.section`
  padding: 7rem 5vw 0px;
  display: grid;
  grid-gap: 2.5rem;

  @media screen and (min-width: 768px) {
    padding: 9rem 5vw 0px;
    }
  

`

const Content = styled.div`
  display: grid;
  grid-gap: 2.5rem;

  
  a {
    text-decoration: none;
    display: grid;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  #d0{

    @media screen and (min-width: 768px) {
      
      grid-column: span 2;
      }
  }


  #d3{
    @media screen and (min-width: 768px) {
        
      grid-row: 3;
      }
  }
  #d4{
    @media screen and (min-width: 768px) {
        
      grid-row: span 2;
      grid-column: span 2;
      }
  }
  #d5{
    @media screen and (min-width: 768px) {
        
      grid-column: span 2;
      }
  }
`

const ImgC = styled(Img)`
  display: grid;
  /* max-height: 300px; */
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`

const Text = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-gap: 0.5rem;
  height: fit-content;
  h6 {
    font-weight: 400;
    color:${({ theme }) => theme.color.black};
  }
  button {
    text-transform: uppercase;
    padding: 0;
    font-weight: 200;
    font-size: 0.875rem;
  }
`

const Divider = styled.div`
  display: grid;
  width: 1px;
  height: 80%;
  background-color: ${({ theme }) => theme.color.black};
`

const CardContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: 5fr auto;
`



export default Projects
