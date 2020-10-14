import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100,200,300&display=swap');
html{
  overflow-x: hidden;
}
  body{
    padding:0;
    margin:0;
    background-color: #fff;
    font-family: ${({ theme }) => theme.font.family};
    overflow-x: hidden;
    
  }
  h1,h2,h3,h4,h5,h6{
    font-weight: 300;
    margin: 0;
  }

  h1{
    color: #000;
    width: fit-content;
    margin-bottom: 48px;
    line-height: 3.625rem;
    font-size: 2rem;
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
      }
  }

h2{
  line-height: 3.25rem;
  font-size:1.75rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
    }
}

h3{
  line-height: 3rem;
  font-size:1.625rem;
  @media screen and (min-width: 768px) {
    font-size: 1.875rem;
    }
}
h4{
  line-height: 2.75rem;
  color: ${({ theme }) => theme.color.grey};
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 1.75rem;
    }
}
h5{
  line-height: 2.5rem;
  color: ${({ theme }) => theme.color.grey};
  font-size:1.25rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    }
  
}
h6{
  line-height: 2rem;
  color: ${({ theme }) => theme.color.grey};
  font-size:1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    }
}

p{
  font-weight: 200;
  line-height: 2rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.grey};
  margin: 0;
}

a{
 
  color: ${({ theme }) => theme.color.black};
}

button{
  font-family: ${({ theme }) => theme.font.family};
}

  /* Fixing the issue with Anilink header fix problem */
  div.tl-wrapper{
  transform: none !important;
  }

  button{
    background-color: transparent;
    border:none;
  }

`

export default GlobalStyle
