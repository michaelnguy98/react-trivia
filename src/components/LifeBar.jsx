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
      <Heart isActive={lives >= 1} />
      <Heart isActive={lives >= 2} />
      <Heart isActive={lives >= 3} />
    </div>
  );
}