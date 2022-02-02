import React from "react";
import Answer from "./Answer";

/**
 * Returns the component which contains all possible answers the player can
 * choose from.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The AnswerList component.
 */
export default function AnswerList(props) {
  return (
    <ul className="answer-list">
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </ul>
  );
}