import React from "react";

export default function StartScreen(props) {
  return (
    <div className="start-screen">
      <button onClick={props.startGame}>
        Start Game
      </button>
    </div>
  );
}