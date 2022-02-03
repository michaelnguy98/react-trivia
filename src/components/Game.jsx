import React, { useEffect } from "react";
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

  // Get the question, answer, and incorrect answers
  useEffect(() => {
    getQuestion()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Board />
    </>
  );
}