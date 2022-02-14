import React from "react";
import Answer from "./Answer";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Returns the component which contains all possible answers the player can
 * choose from.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The AnswerList component.
 */
export default function AnswerList(props) {

  return (
      <AnimatePresence exitBeforeEnter>
        <motion.ul
          className={`answer-list ${props.isLoading ? "no-click" : ""}`}
          key={props.answers[0] + props.answers[1]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {
            props.answers.map(answer => {
              return <Answer key={answer} text={answer} handleChoice={props.handleChoice} active={props.lives > 0} />
            })
          }
        </motion.ul>
      </AnimatePresence>
  );
}