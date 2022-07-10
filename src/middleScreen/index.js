// Libraries

import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components'

// Dependencies

import NavBar from '../NavBar';

// Private

const StyledContainer = styled.div`
  align-items: center;
  background: #F6DEE1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  position: relative;
  width: 100%;
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

// Public

const MiddleScreen = () => {
  const location = useLocation();
  const [playerName] = useState(location.state.playerName)

  console.log("this is location", location.state)
  return (
    <StyledContainer>
      <NavBar />
      <div style={{display: 'flex', flexDirection:"column", alignItems:'center', justifyContent: 'center',}}>
        <StyledTypography>This is the middle page</StyledTypography>

      </div>
    </StyledContainer>
  )
}

export default MiddleScreen;

{/* <StyledButton 
// to="/resultsScreen" 
to=""
state={{
  // this is where i will add state to pass on
}}
onClick={() => console.log("just clicked me")}
>Submit!</StyledButton> */}