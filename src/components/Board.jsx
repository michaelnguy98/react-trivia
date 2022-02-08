import React from "react";
import AnswerList from "./AnswerList";
import LifeBar from "./LifeBar";
import Score from "./Score";
import Question from "./Question";
import GameOver from "./GameOver";

/**
 * Returns the component which holds all relevant components that are required
 * for the trivia game to function. Mostly for passing necessary state values
 * and functions to the necessary components.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The Board component.
 */
export default function Board(props) {
  return (
    <main className="board">
      <LifeBar lives={props.lives} />
      <Score score={props.score} />
      {
        (props.lives > 0)
          ? <>
              <Question question={props.question} />
              <AnswerList answers={props.answers} lives={props.lives} handleChoice={props.handleChoice} />
            </>
          : <GameOver resetGame={props.resetGame} />
      }
    </main>
  );
}