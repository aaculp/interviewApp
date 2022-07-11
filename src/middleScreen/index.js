// Libraries

import React, { useState, useCallback, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'

// Dependencies

import NavBar from '../NavBar';
import useNumberGenerator from '../hooks/useNumberGenerator';

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

const StyledContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
    padding-top: 50px;

    label {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `}
`;

const StyledButton = styled.button`
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
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
  const navigate = useNavigate()
  const { randomNumber, guessedCorrectly, isGuessCorrect } = useNumberGenerator();
  const [playerGuessed, setPlayerGuessed] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState("")

  const handleOnClick = useCallback(() => {
    console.log("hitting this")
    isGuessCorrect(playerGuessed)

    if(guessedCorrectly) {
      setWrongAnswer(true)
      return navigate("/resultsScreen");
    } else {
    // set some type of state to tell him to guess again
    }

  }, [isGuessCorrect, playerGuessed, guessedCorrectly, navigate])

  return (
    <StyledContainer>
      <NavBar />
      <StyledContentContainer>
        <StyledTypography $textSize="25px">We've Generated A Random Number Between 1 - 20</StyledTypography>
        <StyledTypography $textSize="25px">Now You Have To Guess It!</StyledTypography>
        <StyledTypography $textSize="25px" style={{paddingTop: "30px"}}>The Random Number is: {randomNumber}</StyledTypography>

        <StyledLabelContainer>
          Enter Your Guess:
          <input 
            type="number" 
            name="name" 
            min="0"
            max="20"
            value={playerGuessed}
            onChange={(e) => setPlayerGuessed(e.target.value)} 
          />
        </StyledLabelContainer>

        <StyledButton onClick={handleOnClick}>Guess!</StyledButton>
      </StyledContentContainer>
    </StyledContainer>
  )
}

export default MiddleScreen;