import React, { useEffect, useState } from "react";
import Board from "./Board";
import { getQuestion } from "../api/OpenTriviaAPI";

/**
 * Returns the component that handles and stores the current state of the game.
 * Game component passes game state info to the Board component which will
 * distribute that info to the necessary children components.
 *
 * @returns {JSX.Element} The Game component.
 */
export default function Game() {
  const [question, setQuestion] = useState("");

  // Get the question, answer, and incorrect answers
  useEffect(() => {
    getQuestion()
      .then(data => {
        console.log(data);
        setQuestion(data.results[0].question);
      })
      .catch(err => {
        console.log(err);
        setQuestion("");
      });
  }, []);

  return (
    <>
      <Board question={question} />
    </>
  );
}