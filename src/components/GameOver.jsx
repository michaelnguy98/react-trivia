import React from "react";

/**
 * Returns the component which shows up when the player loses all their lives.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The GameOver component.
 */
export default function GameOver(props) {
  return (
    <div>
      <p>
        Game Over
      </p>
      <button onClick={props.resetGame}>
        Play Again
      </button>
    </div>
  );
}