import React from 'react';
import styled from 'styled-components';
 
const InnerContent = ({children, move}) => {
  return (
    <Container move={move}>
      {children}
    </Container>
  );
};
 
const Container = styled.section`
  margin: 0px 5vw;
  padding: 5vw;
  top: ${props => `${props.move}px`};
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  grid-gap: 2.5rem;
  display: grid; 
  z-index: 300;
  @media screen and (min-width: 768px) {
    top: ${props => `calc(2* ${props.move}px)`};
    margin: 0px 10vw;
  }
`;
 
export default InnerContent