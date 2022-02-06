import React from "react";

/**
 * Returns the component that keeps track of the number of questions the player
 * answered correctly.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The Score component.
 */
export default function Score(props) {
  return (
    <div className="correct-counter">
      <p>
        {props.score}
      </p>
    </div>
  );
}