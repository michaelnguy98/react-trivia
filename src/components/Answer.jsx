import React from "react";

/**
 * Returns the component that represents a possible answer a player can pick to
 * answer a given trivia question.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} An Answer component.
 */
export default function Answer(props) {

  /**
   * Handles the behavior when the user clicks on an Answer.
   * @param {Event} event The event triggered from a click.
   */
  function handleClick(event) {
    event.preventDefault();
    props.handleChoice(props.text);
  }

  return (
    <li className="answer" onClick={props.active ? handleClick : null}>
      <p>
        {props.text}
      </p>
    </li>
  );
}