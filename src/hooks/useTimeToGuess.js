// Libraries

import React, { useState,useCallback, useContext} from 'react';
import moment from 'moment';

// Dependencies

import { actions } from '../global-state/reducer';
import { AppContext } from '../global-state/context'

const useTimeToGuess = () => {
    const context = useContext(AppContext);
    
    const { state, dispatch } = context;
    const { startTime, endTime } = state.playerTime;

    const handleFirstGuess = () => {
        dispatch({
            type: actions.START_TIME,
            startTime: { 
                minutes: moment().minutes(), 
                seconds: moment().seconds() 
            }
        })
    };

    const handleFinalGuess = () => {
        dispatch({
            type: actions.END_TIME,
            endTime: { 
                minutes: moment().minutes(), 
                seconds: moment().seconds() 
            }
        })
    };

    const calculateTime = () => {
        console.log("calculating")
        console.log("startTime.minutes", startTime.minutes)
        console.log("endTime.minutes", endTime.minutes)
        if(startTime.minutes === endTime.minutes) {
            console.log("here")
        }
    }

    return { handleFirstGuess, handleFinalGuess, calculateTime }
}

export default useTimeToGuess;