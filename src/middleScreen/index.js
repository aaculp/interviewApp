// Libraries

import React, { useState, useCallback, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components'

// Dependencies

import NavBar from '../NavBar';
import useNumberGenerator from '../hooks/useNumberGenerator';
import useGuessChecker from '../hooks/useGuessChecker';
import useTimeToGuess from '../hooks/useTimeToGuess';

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

// Public

const MiddleScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { randomNumber } = useNumberGenerator();
  const { handleFirstGuess, handleFinalGuess } = useTimeToGuess();
  const { guessesLeft, isGuessCorrect, resetGuesses } = useGuessChecker();
  
  const [playerGuessed, setPlayerGuessed] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState("");
  const [userGuessed, setUserGuessed] = useState([]);

  const handleOnClick = () => {
    isGuessCorrect(playerGuessed);
    setUserGuessed(prevState => [...prevState, playerGuessed])

    console.log("guessesLeft", guessesLeft);
    if(guessesLeft === 5) {
      handleFirstGuess();
    }

    if(guessesLeft === 1) {
      handleFinalGuess();
    }
  }

  useEffect(() => {
    if(guessesLeft === 5) {
      setWrongAnswer("")
    } else if(guessesLeft <= 4 && guessesLeft >= 2) {
      setWrongAnswer(`Sorry you guessed wrong, you have ${guessesLeft} guesses left!`);
    } else if(guessesLeft === 1) {
      setWrongAnswer(`Sorry you guessed wrong, you have ${guessesLeft} guess left!`);
    } else {
      navigate("/resultsScreen", {
        state: {
          ...location.state,
          randomNumber,
          playerName: location.state.playerName
        }
      })
      resetGuesses();
    }
  }, [guessesLeft, randomNumber, navigate, resetGuesses, location])


  return (
    <StyledContainer>
      <NavBar />
      <StyledContentContainer>
        <StyledTypography $textSize="25px">We've Generated A Random Number Between 1 - 20</StyledTypography>
        <StyledTypography $textSize="25px" style={{paddingTop: "10px"}}>Now You Have To Guess It In 5 Guesses Or Less!</StyledTypography>
        <StyledTypography $textSize="25px" style={{paddingTop: "30px"}}>The Random Number is: {randomNumber}</StyledTypography>
        <StyledTypography $textSize="25px" style={{paddingTop: "30px"}}>So Far You've Guessed: {userGuessed.join(", ")}</StyledTypography>
        <StyledTypography $textSize="25px" style={{paddingTop: "30px"}}>Guesses Left: {guessesLeft}</StyledTypography>
        <StyledTypography $textSize="25px" style={{paddingTop: "30px", color: 'red'}}>{wrongAnswer}</StyledTypography>

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