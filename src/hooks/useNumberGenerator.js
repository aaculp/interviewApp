// Libraries

import {useState, useEffect} from 'react';

// Dependencies

const useNumberGenerator = () => {
    const [randomNumber, setRandomNumber] = useState();
    const [guessedCorrectly, setGuessedCorrectly] = useState(false);
    const [guessesLeft, setGuessesLeft] = useState(5);

    const generateNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 20) + 1)
    }

    const isGuessCorrect = (numberGuessed) => {
        setGuessedCorrectly(randomNumber === parseInt(numberGuessed));

        if(!guessedCorrectly) {
            setGuessesLeft(prevState => prevState - 1)
        }
    }

    useEffect(() => generateNumber(), [])

    return { randomNumber, guessedCorrectly, guessesLeft, isGuessCorrect }
}

export default useNumberGenerator;