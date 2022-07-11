// Libraries

import {useState, useEffect} from 'react';

// Dependencies

const useNumberGenerator = () => {
    const [randomNumber, setRandomNumber] = useState();
    const [guessedCorrectly, setGuessedCorrectly] = useState(false);

    const generateNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 20) + 1)
    }

    const isGuessCorrect = (numberGuessed) => {
        setGuessedCorrectly(randomNumber === parseInt(numberGuessed));
    }

    useEffect(() => generateNumber(), [])

    return { randomNumber, guessedCorrectly, isGuessCorrect }
}

export default useNumberGenerator;