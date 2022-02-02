import React from "react";

/**
 * Returns the component that represents a possible answer a player can pick to
 * answer a given trivia question.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} An Answer component.
 */
export default function Answer(props) {
  return (
    <li className="answer">
      <p>
        This is an answer.
      </p>
    </li>
  );
}