import React from "react";
import Row from "./Row";

export default function Grid({ guesses, currentGuess, turn }) {
  return (
    <div>
      {/* guess object - g , index - i */}

      {guesses.map((g, i) => {
        // the below row is displayed for that particular turn ,
        // other previous guesses will be the default row template

        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }

        //default row
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
}
