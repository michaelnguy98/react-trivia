import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  correct: { backgroundColor: "#339966" },
  incorrect: { backgroundColor: "#990000" }
}

/**
 * Returns the component that represents a possible answer a player can pick to
 * answer a given trivia question.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} An Answer component.
 */
export default function Answer(props) {
  const [correct, setCorrect] = useState(null);

  /**
   * Handles the behavior when the user clicks on an Answer.
   * @param {Event} event The event triggered from a click.
   */
  function handleClick(event) {
    event.preventDefault();
    const result = props.handleChoice(props.text);
    setCorrect(result);
  }

  return (
    <motion.li
      className="answer"
      onClick={props.active ? handleClick : null}
      key={"answer: " + props.text}
      animate={(correct !== null) && (correct ? "correct" : "incorrect")}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <p>
        {props.text}
      </p>
    </motion.li>
  );
}