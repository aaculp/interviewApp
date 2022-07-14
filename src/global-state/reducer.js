const GUESSED_CORRECTLY = 'GUESSED_CORRECTLY';
const GUESSES_LEFT = 'GUESSES_LEFT';
const GUESSES_RESET = 'GUESSES_RESET';
const RANDOM_NUMBER = 'RANDOM_NUMBER';
const START_TIME = 'START_TIME';
const END_TIME = 'END_TIME';
const TOTAL_TIME = 'TOTAL_TIME';

export const actions = {
    GUESSED_CORRECTLY,
    GUESSES_LEFT,
    GUESSES_RESET,
    RANDOM_NUMBER,
    START_TIME,
    END_TIME,
    TOTAL_TIME
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
        case START_TIME:
            return {
                ...state,
                playerTime: {
                    ...state.playerTime, 
                    startTime: action.startTime
                }
            }
        case END_TIME:
            return {
                ...state,
                playerTime: {
                    ...state.playerTime,
                    endTime: action.endTime
                }
            }
        case TOTAL_TIME:
            return {
                ...state,
                playerTime: {
                    ...state.playerTime,
                    totalTime: action.totalTime
                }
            }
        default:
            return state;
    }
}