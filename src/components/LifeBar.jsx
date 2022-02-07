import React from "react";
import Heart from "./Heart";

/**
 * Returns the component which tells the player how many lives they have left in
 * the current game.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} The LifeBar component.
 */
export default function LifeBar(props) {
  const {lives} = props;

  return (
    <div className="life-bar">
      <Heart active={lives >= 1} />
      <Heart active={lives >= 2} />
      <Heart active={lives >= 3} />
    </div>
  );
}