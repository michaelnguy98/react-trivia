import React from "react";
import AnswerList from "./AnswerList";
import LifeBar from "./LifeBar";
import Score from "./Score";
import Question from "./Question";
import GameOver from "./GameOver";
import { motion, AnimatePresence } from "framer-motion";

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
      key="gameboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LifeBar lives={props.lives} />
      <Score score={props.score} />
      <AnimatePresence exitBeforeEnter>
      {
        (props.lives > 0)
          ? <motion.div
              key="information"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Question question={props.question} />
              <AnswerList
                answers={props.answers}
                lives={props.lives}
                handleChoice={props.handleChoice}
                isLoading={props.isLoading}
              />
            </motion.div>
          : <GameOver resetGame={props.resetGame} />
      }
      </AnimatePresence>
    </motion.main>
  );
}