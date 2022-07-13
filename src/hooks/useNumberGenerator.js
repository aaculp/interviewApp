// Libraries

import {useCallback, useEffect, useContext} from 'react';

// Dependencies

import { actions } from '../global-state/reducer';
import { AppContext } from '../global-state/context';

const useNumberGenerator = () => {
    const context = useContext(AppContext);
    
    const { state, dispatch } = context;
    const { randomNumber } = state;

    const generateNumber = useCallback(() => {
        dispatch({
            type: actions.RANDOM_NUMBER,
            randomNumber: Math.floor(Math.random() * 20) + 1,
        })
     }, [dispatch])

    useEffect(() => generateNumber(), [generateNumber])

    return { randomNumber }
}

export default useNumberGenerator;