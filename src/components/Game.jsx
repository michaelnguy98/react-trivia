import React from "react";
import Board from "./Board";

/**
 * Returns the component that handles and stores the current state of the game.
 * Game component passes game state info to the Board component which will
 * distribute that info to the necessary children components.
 *
 * @returns {JSX.Element} The Game component.
 */
export default function Game() {
  return (
    <>
      <Board />
    </>
  );
}