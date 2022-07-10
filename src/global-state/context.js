// Libraries

import { createContext } from 'react'

export const initialState = {
    initialized: false,
    quizAnswers: {}
}

export const QuizContext = createContext(initialState)