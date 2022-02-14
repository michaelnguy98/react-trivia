import React from "react";
import Answer from "./Answer";
import { animate } from "framer-motion";

/**
 * Returns the component which contains all possible answers the player can
 * choose from.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The AnswerList component.
 */
export default function AnswerList(props) {

  return (
    <ul className={`answer-list ${props.isLoading ? "no-click" : ""}`}>
      {
        props.answers.map(answer => {
          return <Answer key={answer} text={answer} handleChoice={props.handleChoice} active={props.lives > 0} />
        })
      }
    </ul>
  );
}