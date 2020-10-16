import React from "react"
import styled from "styled-components"
import PageTitle from "../components/ui/element/pageTitle"
import TeamCard from "../components/ui/teamCard"

const Team = props => {
  return (
    <Container id="team">
      <PageTitle>Meet The Team</PageTitle>

      <TeamS>
        <TeamCard
          name="Nyousha Houshmand"
          title="President"
          featuredImage={props.personOne}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          purus sed odio vestibulum efficitur. Integer id ligula faucibus,
          accumsan lectus vitae, dignissim elit. Cras at volutpat eros, ut
          iaculis quam. Aenean non scelerisque orci, porta tempor nulla. Nulla
          justo lectus, elementum non est in, eleifend accumsan nibh.
        </TeamCard>
        <TeamCard
          name="Grace Zeren"
          title="Project Manager"
          featuredImage={props.personTwo}
        >
          Quisque tempor purus vitae neque tempus, at pellentesque justo
          convallis. Suspendisse nec blandit massa. Sed velit molestie, aliquam
          quam sit amet, tempus eros. Curabi elementum mi non velit bibendum,
          nec placerat nunc feugiat. Sed sed leo tellus. Donec ac justo mauris.
          Aliquam accumsan sed risus et vulputate.
        </TeamCard>
        <TeamCard
          name="Kiyomi Lashbrook"
          title="Administrator"
          featuredImage={props.personThree}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          purus sed odio vestibulum efficitur. Integer id ligula faucibus,
          accumsan lectus vitae, dignissim elit. Cras at volutpat eros, ut
          iaculis quam. Aenean non scelerisque orci, porta tempor nulla. Nulla
          justo lectus, elementum non est in, eleifend accumsan nibh.
        </TeamCard>
      </TeamS>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  grid-gap: 2.5rem;
  padding: 10vh 10vw;
`

const TeamS = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: row;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
      
    }
`

export default Team
