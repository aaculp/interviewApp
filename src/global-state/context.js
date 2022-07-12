// Libraries

import { createContext } from 'react'

export const initialState = {
    guessedCorrectly: false,
    guessesLeft: 5,
    randomNumber: 0,
    playerName: '',
}

export const AppContext = createContext(initialState)