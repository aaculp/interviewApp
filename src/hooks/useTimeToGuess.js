// Libraries

import React, { useState, useContext} from 'react';
import moment from 'moment';

// Dependencies

import { actions } from '../global-state/reducer';
import { AppContext } from '../global-state/context'

const useTimeToGuess = () => {
    const context = useContext(AppContext);
    
    const { state } = context;
    const { randomNumber } = state;
    const [startTime, setStartTime] = useState({ minutes: 0, seconds: 0 });
    const [endTime, setEndTime] = useState({ minutes: 0, seconds: 0 });

    const handleFirstGuess = () => {
        setStartTime({ minutes: moment().minutes(), seconds: moment().seconds()})
    };

    const handleFinalGuess = () => {
        setEndTime({ minutes: moment().minutes(), seconds: moment().seconds()})
    };

    React.useEffect(() => {
        console.log("startTime", startTime);
        console.log("endTime", endTime);
    }, [startTime, endTime])

    return { handleFirstGuess, handleFinalGuess }
}

export default useTimeToGuess;