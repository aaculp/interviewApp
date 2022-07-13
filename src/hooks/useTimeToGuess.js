// Libraries

import React, { useState,useCallback, useContext} from 'react';
import moment from 'moment';

// Dependencies

import { actions } from '../global-state/reducer';
import { AppContext } from '../global-state/context'

const useTimeToGuess = () => {
    const context = useContext(AppContext);
    
    const { state } = context;
    const [startTime, setStartTime] = useState({ minutes: 0, seconds: 0 });
    const [endTime, setEndTime] = useState({ minutes: 0, seconds: 0 });

    const handleFirstGuess = () => {
        setStartTime({ minutes: moment().minutes(), seconds: moment().seconds()})
    };

    const handleFinalGuess = () => {
        setEndTime({ minutes: moment().minutes(), seconds: moment().seconds()})
    };

    const calculateTime = useCallback(() => {
        console.log("startTime", startTime);
        console.log("endTime", endTime);
        console.count();
    }, [startTime, endTime])

    React.useEffect(() => {
        calculateTime();
    }, [calculateTime, endTime])

    return { handleFirstGuess, handleFinalGuess, calculateTime }
}

export default useTimeToGuess;