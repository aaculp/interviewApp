// Libraries

import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

// Dependencies

// Private

const StyledContainer = styled.div`
  background-color: #f6dee1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
`;

const StyledTypography = styled.span`
  font-size: 50px;
`;

const StyledButton = styled(Link)`
  font-size: 50px;
  text-decoration: none;

  &&:visited {
    color: black;
  }

  &&:hover {
    color: hotpink;
  }
`;

const ResultsScreen = () => {
  return(
    <StyledContainer>
      <StyledTypography>This is the Results page!</StyledTypography>
      <StyledButton 
        to="/" 
        state={{
          // this is where i will add state to pass on
        }}
        onClick={() => console.log("just clicked me")}
      >Play again!</StyledButton>
    </StyledContainer>
  )
}

export default ResultsScreen