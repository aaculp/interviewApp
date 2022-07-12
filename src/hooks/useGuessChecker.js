// Libraries

import {useContext} from 'react';

// Dependencies

import { AppContext } from '../global-state/context'
import { actions } from '../global-state/reducer';

const useNumberGenerator = () => {
    const context = useContext(AppContext);
    const { state, dispatch } = context;
    const { guessedCorrectly, guessesLeft, randomNumber } = state

    console.log("state is:", state)

    const isGuessCorrect = (numberGuessed) => {
        if(randomNumber === parseInt(numberGuessed)) {
            dispatch({
                type: actions.GUESSED_CORRECTLY,
                guessedCorrectly: true
            })
        } else {
            dispatch({
                type: actions.GUESSED_CORRECTLY,
                guessedCorrectly: false
            })
        }

        if(!guessedCorrectly) {
            dispatch({
                type: actions.GUESSES_LEFT
            })
        }
    }

    const resetGuesses = () =>
    dispatch({
        type: actions.GUESSES_RESET,
        guessedCorrectly: false
    })

    return { guessedCorrectly, guessesLeft, isGuessCorrect, resetGuesses }
}

export default useNumberGenerator;