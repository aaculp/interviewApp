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
  const navigate = useNavigate()
  const { randomNumber, guessedCorrectly, guessesLeft, isGuessCorrect } = useNumberGenerator();
  const [playerGuessed, setPlayerGuessed] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState("")

  const handleOnClick = useCallback(() => {
    isGuessCorrect(playerGuessed)

    if(guessedCorrectly) {
      navigate("/resultsScreen");
    }

  }, [isGuessCorrect, playerGuessed, guessedCorrectly, navigate])

  useEffect(() => {
    if(guessesLeft === 0) {
      // alert("You ran out of guesses and lost! Play Again!!");
      navigate("/resultsScreen")
    } else {
      if(guessesLeft === 1) {
        setWrongAnswer(`Sorry you guessed wrong, you have ${guessesLeft} guess left!`)
      } else if (guessesLeft === 5)  {
        setWrongAnswer("")
      } else {
        setWrongAnswer(`Sorry you guessed wrong, you have ${guessesLeft} guesses left!`)
      }
    }
  }, [guessesLeft, navigate])

  useEffect(() => {
    if(guessedCorrectly) {
      return navigate("/resultsScreen");
    }
  }, [guessedCorrectly, navigate])


  return (
    <StyledContainer>
      <NavBar />
      <StyledContentContainer>
        <StyledTypography $textSize="25px">We've Generated A Random Number Between 1 - 20</StyledTypography>
        <StyledTypography $textSize="25px" style={{paddingTop: "10px"}}>Now You Have To Guess It In 5 Guesses Or Less!</StyledTypography>
        <StyledTypography $textSize="25px" style={{paddingTop: "30px"}}>The Random Number is: {randomNumber}</StyledTypography>
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