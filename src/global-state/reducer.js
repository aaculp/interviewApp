// Dependencies

import { initialState } from "./context";

const INITIALIZE_QUIZ = 'INITIALIZE_QUIZ';
const RESET_QUIZ = 'RESET_QUIZ';

export const actions = {
    INITIALIZE_QUIZ,
    RESET_QUIZ
}

export const reducer = (state, action) => {
    switch(action.type) {
        case INITIALIZE_QUIZ:
            return {
                ...state,
                initialized: true
            }
        case RESET_QUIZ:
            return {
                ...state,
                ...initialState, 
                initialized: true
            }
        default:
            return state;
    }
}