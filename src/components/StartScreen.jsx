import React from "react";
import { motion } from "framer-motion";

/**
 * Returns the component which is diplayed first before the game starts.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The StartScreen component.
 */
export default function StartScreen(props) {
  return (
    <motion.div
      className="start-screen"
      key="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2>
        Choose the correct answer to the questions
      </motion.h2>
      <motion.button
        onClick={props.startGame}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Start Game
      </motion.button>
    </motion.div>
  );
}