// Libraries

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

// Dependencies

const StyledContainer = styled.div`
  background-color: #f6dee1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 75%;
`;

const StyledTypography = styled.span`
  ${({ $textSize}) => `
    font-size: ${$textSize};
  `}
`;

const StyledLabelContainer = styled.label`
  ${({ $textSize}) => `
    font-size: ${$textSize};
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


const HomeScreen = () => {
  const [playerName, setPlayerName] = useState('');

  return (
    <StyledContainer>
      <StyledInfoContainer>
        <StyledTypography $textSize="50px">Guess the Number!</StyledTypography>
        <StyledTypography $textSize="25px">You will have 5 chances to guess the correct number. Good Luck!</StyledTypography>
      </StyledInfoContainer>

      <StyledLabelContainer>
        Enter Name: 
        <input type="text" name="name" onChange={(e) => setPlayerName(e.target.value)} />
      </StyledLabelContainer>

      <StyledButton 
        type="submit" value="Submit"
        to="/middleScreen" 
        state={{
          // this is where i will add state to pass on
          playerName
        }}
        onClick={() => console.log("just clicked me")}
      >Start!</StyledButton>
    </StyledContainer>
  )
}

export default HomeScreen