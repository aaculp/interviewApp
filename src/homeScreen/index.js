// Libraries

import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

// Dependencies

// Private

const StyledContainer = styled.div`
  background: #F6DEE1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 50px;
  text-align: center;

  label {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const StyledTypography = styled.span`
  ${({ $textSize}) => `
    font-size: ${$textSize};
  `}
`;

const StyledLabelContainer = styled.label`
  ${({ $textSize}) => `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    label {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `}
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

const HomeScreen = () => {
  const location = useLocation()
  const [playerName, setPlayerName] = useState(location.state?.playerName ? location.state.playerName : '' );

  return (
    <StyledContainer>
      <StyledInfoContainer>
        <StyledTypography $textSize="50px">Guess the Number!</StyledTypography>
        <StyledTypography $textSize="25px">You will have 5 chances to guess the correct number. Good Luck!</StyledTypography>
      </StyledInfoContainer>

      <StyledLabelContainer>
        Enter Your Name: 
        <input type="text" name="name" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
      </StyledLabelContainer>

      <StyledButton 
        type="submit" value="Submit"
        to="/middleScreen" 
        state={{
          // this is where i will add state to pass on
          playerName
        }}
      >Start!</StyledButton>
    </StyledContainer>
  )
}

export default HomeScreen