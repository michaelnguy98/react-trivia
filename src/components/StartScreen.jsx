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
    <div className="start-screen">
      <motion.button
        onClick={props.startGame}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Start Game
      </motion.button>
    </div>
  );
}