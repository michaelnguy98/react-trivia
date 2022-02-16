import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Returns a component that displays the current question the player has to
 * answer to.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The Question component.
 */
export default function Question(props) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="question"
        key={props.question}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 0.5 } }}
      >
        <p>
          {props.question}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}