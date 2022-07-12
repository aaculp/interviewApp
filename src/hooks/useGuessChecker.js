// Libraries

import { useContext, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

// Dependencies

import { AppContext } from '../global-state/context'
import { actions } from '../global-state/reducer';

const useGuessChecker = () => {
    const context = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    const { state, dispatch } = context;
    const { guessedCorrectly, guessesLeft, randomNumber } = state

    console.log("state is:", state)

    const resetGuesses = useCallback(() => {
        dispatch({
            type: actions.GUESSES_RESET,
            guessedCorrectly: false
        })
    }, [dispatch])

    const guessedCorretlyTrue = () => 
    dispatch({
        type: actions.GUESSED_CORRECTLY,
        guessedCorrectly: true
    })

    const guessedCorretlyFalse = useCallback(() => {
        dispatch({
            type: actions.GUESSED_CORRECTLY,
            guessedCorrectly: false
        })
    }, [dispatch])

    const isGuessCorrect = (numberGuessed) => {
        if(randomNumber === parseInt(numberGuessed)) {
            guessedCorretlyTrue();
        }

        if(!guessedCorrectly) {
            dispatch({
                type: actions.GUESSES_LEFT
            })
        }
    }

    useEffect(() => {
        if(guessedCorrectly) {
            navigate("/resultsScreen", {
                state: {
                ...location.state,
                randomNumber,
                playerName: location.state.playerName
                }
            });

            guessedCorretlyFalse();
            resetGuesses();
        }
      }, [guessedCorrectly, navigate, location, randomNumber, guessedCorretlyFalse, resetGuesses])

    return { guessesLeft, isGuessCorrect, resetGuesses }
}

export default useGuessChecker;