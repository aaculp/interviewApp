const GUESSED_CORRECTLY = 'GUESSED_CORRECTLY';
const GUESSES_LEFT = 'GUESSES_LEFT';
const GUESSES_RESET = 'GUESSES_RESET';
const RANDOM_NUMBER = 'RANDOM_NUMBER';

export const actions = {
    GUESSED_CORRECTLY,
    GUESSES_LEFT,
    GUESSES_RESET,
    RANDOM_NUMBER,
}

export const reducer = (state, action) => {
    switch(action.type) {
        case GUESSED_CORRECTLY:
            return {
                ...state,
                guessedCorrectly: action.guessedCorrectly
            }
        case GUESSES_LEFT:
            return {
                ...state,
                guessesLeft: state.guessesLeft - 1
            }
        case GUESSES_RESET:
            return {
                ...state,
                guessesLeft: 5
            }
        case RANDOM_NUMBER:
            return {
                ...state,
                randomNumber: action.randomNumber
            }
        default:
            return state;
    }
}