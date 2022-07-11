// Libraries

import React, {useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom";
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

const StyleFlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledTypography = styled.span`
  font-size: 50px;
`;

const StyledButton = styled.button`
  ${({ $disabledButton }) => `
    background-color: white;
    border: 2px solid hotpink;
    border-radius: 25px;
    color: hotpink;
    cursor: pointer;
    font-size: 50px;
    margin-top: 25px;
    padding: 15px 30px;
    text-decoration: none;

    &&:visited {
      color: hotpink;
    }
  `}
`;

const ResultsScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [randomNumber] = useState(location.state.randomNumber);
  const [playerName] = useState(location.state.playerName);

  const handleOnClick = () => {
    navigate('/', {state: { randomNumber, playerName }})
  }

  return(
    <StyledContainer>
      <StyleFlexContainer>
        <StyledTypography>Wow what a guess, {playerName}!</StyledTypography>
        <StyledTypography>The random number was: {randomNumber}</StyledTypography>
      </StyleFlexContainer>
      <StyledButton onClick={handleOnClick}>Play again!</StyledButton>
    </StyledContainer>
  )
}

export default ResultsScreen