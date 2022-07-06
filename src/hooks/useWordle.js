import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // func to format guess into array of letter objects
  // eg: [{key:'a', color:'green'}]
  const formatGuess = () => {};

  // func to add a new guess to the guess state
  // update the incorrect state if guess is wrong
  // add one to the turn state after each guess
  const addNewGuess = () => {};

  // func to handle keyup event and track current guess
  // if user press enter , add the new guess
  const handleKeyup = () => {};

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
