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

    const resetGuesses = useCallback(() => {
        dispatch({
            type: actions.GUESSES_RESET,
            guessedCorrectly: false
        })
    }, [dispatch])

    const guessedCorretlyTrue = useCallback(() =>  {
        dispatch({
            type: actions.GUESSED_CORRECTLY,
            guessedCorrectly: true
        })
    }, [dispatch])

    const guessedCorretlyFalse = useCallback(() => {
        dispatch({
            type: actions.GUESSED_CORRECTLY,
            guessedCorrectly: false
        })
    }, [dispatch])

    const isGuessCorrect = useCallback((numberGuessed) => {
        if(randomNumber === parseInt(numberGuessed)) {
            guessedCorretlyTrue();
        }

        if(!guessedCorrectly) {
            dispatch({
                type: actions.GUESSES_LEFT
            })
        } else {
            resetGuesses();
            guessedCorretlyFalse();
            navigate("/resultsScreen", {
                state: {
                ...location.state,
                randomNumber,
                playerName: location.state.playerName
                }
            });
        }
    }, [
        guessedCorretlyTrue, 
        guessedCorrectly, 
        dispatch, 
        guessedCorretlyFalse, 
        resetGuesses, 
        navigate,
        location,
        randomNumber
    ]);

    return { guessesLeft, isGuessCorrect, resetGuesses }
}

export default useGuessChecker;