import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState(["hello"]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // func to format guess into array of letter objects
  // eg: [{key:'a', color:'green'}]
  const formatGuess = () => {
    console.log('formatting the guess - ', currentGuess)
  };

  // func to add a new guess to the guess state
  // update the incorrect state if guess is wrong
  // add one to the turn state after each guess
  const addNewGuess = () => {};

  // func to handle keyup event and track current guess
  // if user press enter , add the new guess
  const handleKeyup = ({ key }) => {
    // console.log("key pressed - ", key);

    if (key === 'Enter') {
        // only add guess if turn is less than 5
        if (turn > 5) {
          console.log('you used all your guesses!')
          return
        }
        // do not allow duplicate words
        if (history.includes(currentGuess)) {
          console.log('you already tried that word.')
          return
        }
        // check word is 5 characters
        if (currentGuess.length !== 5) {
          console.log('word must be 5 chars.')
          return
        }
        formatGuess()
      }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
