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
          Nyousha’s university education in chemical engineering grounds him in
          systems, quality control and complex problem solving. His subsequent
          George Brown College education in construction management and his
          extensive hands-on experience in construction renovation give him a
          clear understanding of how materials, structures, systems and
          processes interconnect. His solid work ethic, ability to troubleshoot,
          problem solve and execute solutions makes him an ideal leader for
          complex renovation and construction projects.
        </TeamCard>
        <TeamCard
          name="Grace Zeren"
          title="Director of Marketing &amp; Project Management"
          featuredImage={props.personTwo}
        >
          With over 10 years of marketing and project management experience,
          Grace is overseeing corporate communications and marketing, project
          coordination, client and employee relations and industry
          communication. As part of the management team, Grace oversees
          important aspects of the building process by staying in close
          communication with all key stakeholders including clients, trades and
          architects. In addition to her Marketing degree from George Brown
          College, she also holds a Bachelor of Science Degree in Biology and
          maintains an active Real Estate license.
        </TeamCard>
        <TeamCard
          name="Kiyomi Lashbrook"
          title="Office Manager"
          featuredImage={props.personThree}
        >
          Kiyomi has been with the company for over 10 years. She began her
          career “working the tools” on construction sites and then moved into a
          combination of accounting, project management, executive assistant and
          office management roles. As an experienced member of the team and with
          a solid understanding of building systems and material procurement,
          she adds great value and insight to the company’s successful project
          coordination and execution. She holds a Psychology Degree from
          McMaster University and adds to her knowledge base regularly through
          Construction Management courses at George Brown College.
        </TeamCard>
      </TeamS>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  grid-gap: 2.5rem;
  @media screen and (min-width: 768px) {
    padding: 10rem 10vw;
  }
  padding: 7rem 10vw;
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
