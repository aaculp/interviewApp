// Libraries

import { useContext } from 'react';
import moment from 'moment';

// Dependencies

import { actions } from '../global-state/reducer';
import { AppContext } from '../global-state/context'

const useTimeToGuess = () => {
    const context = useContext(AppContext);
    
    const { state, dispatch } = context;
    const { startTime, endTime, totalTime } = state.playerTime;

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
        if(startTime.minutes === endTime.minutes) {
           return dispatch({
                type: actions.TOTAL_TIME,
                totalTime: `Your time was ${endTime.seconds - startTime.seconds}s`,
            })
        } else {
           return dispatch({
                type: actions.TOTAL_TIME,
                totalTime: `Your time was ${endTime.minutes - startTime.minutes} minutes and ${endTime.seconds - startTime.seconds}s`,
            })
        }
    }

    return { totalTime, handleFirstGuess, handleFinalGuess, calculateTime }
}

export default useTimeToGuess;