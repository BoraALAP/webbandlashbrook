import React from 'react';
import styled from 'styled-components';
 
const PageTitle = ({children}) => {
  return (
    <Container>
      <h2>{children}</h2>
      <Divider />
    </Container>
  );
};
 
const Container = styled.div`
  display: grid;
  width: fit-content;
  grid-gap: 1rem;
`

const Divider = styled.div`
  display: grid;
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
`
 
export default PageTitle