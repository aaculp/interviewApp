// Libraries

import React, { useState,useCallback} from 'react';
import moment from 'moment';

const useTimeToGuess = () => {
    const [startTime, setStartTime] = useState({ minutes: 0, seconds: 0 });
    const [endTime, setEndTime] = useState({ minutes: 0, seconds: 0 });

    const handleFirstGuess = () => {
        setStartTime({ minutes: moment().minutes(), seconds: moment().seconds()})
    };

    const handleFinalGuess = () => {
        setEndTime({ minutes: moment().minutes(), seconds: moment().seconds()})
        calculateTime();
    };

    const calculateTime = useCallback(() => {
        console.log("startTime", startTime);
        console.log("endTime", endTime);
    }, [startTime, endTime])

    React.useEffect(() => {
        calculateTime();
    }, [calculateTime, startTime, endTime])

    return { handleFirstGuess, handleFinalGuess, calculateTime }
}

export default useTimeToGuess;