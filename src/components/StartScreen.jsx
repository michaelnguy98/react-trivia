import React from "react";

/**
 * Returns the component which is diplayed first before the game starts.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The StartScreen component.
 */
export default function StartScreen(props) {
  return (
    <div className="start-screen">
      <button onClick={props.startGame}>
        Start Game
      </button>
    </div>
  );
}