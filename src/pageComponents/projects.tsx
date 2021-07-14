import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import { GetAllProjects } from "../hooks/projects/get-projects-graphql"
import PageTitle from "../components/ui/element/pageTitle"
import { Button } from "../components/ui/button"

const Projects = props => {
  const { allSanityProject } = GetAllProjects()
  const limit: Number = 8
  const addNum: Number = 4

  const allProjects = allSanityProject.nodes

  const [list, setList] = useState([...allProjects.slice(0, limit)])

  const handleClick = () => {
    const nextResults =
      list.length < allProjects.length
        ? allProjects.slice(list.length, list.length + addNum)
        : []
    setList([...list, ...nextResults])
  }

  console.log(list)

  return (
    <Container id="projects">
      <PageTitle>Projects</PageTitle>
      <Content>
        {allSanityProject &&
          list.map((node, index) => {
            return (
              <Anilink
                to={`/project/${node.slug.current}`}
                paintDrip
                hex=".000"
                key={node._id}
                className={`d${index % limit}`}
              >
                <CardContainer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ImgC fluid={node.mainImage.asset.fluid.src} />
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
      {allProjects.length > list.length && (
        <ButtonS initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Button Secondary onClick={handleClick}>
            Show More
          </Button>
        </ButtonS>
      )}
    </Container>
  )
}

const ButtonS = styled(motion.div)`
  display: grid;
  justify-content: center;
`

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

  .d0 {
    @media screen and (min-width: 768px) {
      grid-column: span 2;
    }
  }

  .d3 {
    @media screen and (min-width: 768px) {
      grid-row: 3;
    }
  }
  .d4 {
    @media screen and (min-width: 768px) {
      grid-row: span 2;
      grid-column: span 2;
    }
  }
  .d5 {
    @media screen and (min-width: 768px) {
      grid-column: span 2;
    }
  }
  .d7 {
    @media screen and (min-width: 768px) {
      grid-column: span 3;
    }
  }
`

const ImgC = styled.div`
  display: grid;
  /* max-height: 300px; */
  background-image: url(${props => props.fluid});

  height: 400px;
  background-size: cover;
  background-position: center center;
  @media screen and (min-width: 768px) {
    min-height: 500px;
    height: auto;
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
    color: ${({ theme }) => theme.color.black};
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

const CardContainer = styled(motion.div)`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: 5fr auto;
`

export default Projects
