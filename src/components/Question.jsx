import React from "react";

/**
 * Returns a component that displays the current question the player has to
 * answer to.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The Question component.
 */
export default function Question(props) {
  return (
    <div className="question">
      <p>
        {props.question}
      </p>
    </div>
  );
}