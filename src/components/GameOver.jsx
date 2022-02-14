import React from "react";
import { motion } from "framer-motion";

/**
 * Returns the component which shows up when the player loses all their lives.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The GameOver component.
 */
export default function GameOver(props) {
  return (
    <motion.div
      className="game-over"
      key="gameover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p>
        Game Over
      </p>
      <motion.button
        onClick={props.resetGame}
        key="playagain"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Play Again
      </motion.button>
    </motion.div>
  );
}