// Libraries

import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
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
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;

    input {
      margin-top: 10px;
    }
  `}
`;

const StyledButton = styled.button`
  ${({ $disabledButton }) => `
    background-color: white;
    border: ${$disabledButton ? '2px solid gray' : '2px solid hotpink'};
    border-radius: 25px;
    color: ${$disabledButton ? 'gray' : 'hotpink'};
    cursor: ${$disabledButton ? 'not-allowed' : 'pointer'};
    font-size: 50px;
    padding: 15px 30px;
    text-decoration: none;

    &&:visited {
      color: hotpink;
    }
  `}
`;

// Public 

const HomeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [playerName, setPlayerName] = useState(location.state?.playerName ? location.state.playerName : '' );
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    if(playerName === '') {
      return setDisabledButton(true);
    }
    return setDisabledButton(false);
  }, [playerName])

  return (
    <StyledContainer>
      <StyledInfoContainer>
        <StyledTypography $textSize="50px">Guess the Number!</StyledTypography>
        <StyledTypography $textSize="25px">You will have 5 chances to guess the correct number. Good Luck!</StyledTypography>
      </StyledInfoContainer>

      <StyledLabelContainer>
        Enter Your Name To Begin: 
        <input type="text" name="name" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
      </StyledLabelContainer>

      <StyledButton 
        disabled={disabledButton}
        $disabledButton={disabledButton}
        type="button" 
        value="Submit"
        onClick={() => {
          navigate("/middleScreen", {
            state: {
              playerName
            }
          })
        }}
      >Start!</StyledButton>
    </StyledContainer>
  )
}

export default HomeScreen