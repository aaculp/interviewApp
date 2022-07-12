// Libraries

import { useState, useEffect } from 'react';

// Dependencies

const useGuessChecker = () => {
    const [guessedCorrectly, setGuessedCorrectly] = useState(false);
    const [guessesLeft, setGuessesLeft] = useState(5);


    const isGuessCorrect = (numberGuessed) => {
        setGuessedCorrectly(randomNumber === parseInt(numberGuessed));

        if(!guessedCorrectly) {
            setGuessesLeft(prevState => prevState - 1)
        }
    }

    return { randomNumber, guessedCorrectly, guessesLeft, isGuessCorrect }
}

export default useGuessChecker;