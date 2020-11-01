import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
import PersonTitle from './element/personTitle';
 
const TeamCard = ({name, title, children, featuredImage}) => {
  return (
    <Container>
      <Img fluid={featuredImage} />
      <PersonTitle name={name} title={title} />

      <p>{children}</p>
 
    </Container>
  );
};
 
const Container = styled.div`
display: grid;
grid-gap: 1rem;
align-items: start;
align-content: start;

@media screen and (min-width: 768px) {
  max-width: 33vw;
    ;
  }
`;




 
export default TeamCard