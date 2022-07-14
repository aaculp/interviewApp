// Libraries

import { createContext } from 'react'

export const initialState = {
    guessedCorrectly: false,
    guessesLeft: 5,
    randomNumber: 0,
    playerName: '',
    playerTime: {
        startTime: { minutes: 0, seconds: 0 },
        endTime: { minutes: 0, seconds: 0 },
        totalTime: 0,
    }
}

export const AppContext = createContext(initialState)