import React from "react";
import AnswerList from "./AnswerList";
import LifeBar from "./LifeBar";
import Score from "./Score";
import Question from "./Question";
import GameOver from "./GameOver";
import { motion } from "framer-motion";

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
    <motion.main
      className="board"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <LifeBar lives={props.lives} />
      <Score score={props.score} />
      {
        (props.lives > 0)
          ? <>
              <Question question={props.question} />
              <AnswerList
                answers={props.answers}
                lives={props.lives}
                handleChoice={props.handleChoice}
                isLoading={props.isLoading}
              />
            </>
          : <GameOver resetGame={props.resetGame} />
      }
    </motion.main>
  );
}