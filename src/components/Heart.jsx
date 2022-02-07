import React from "react";

/**
 * Returns the component that represents one of the lives the player has in a
 * game. The heart has two states, one where the player still has that life, and
 * one where they no longer have it.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} A Heart component.
 */
export default function Heart(props) {
  const { active } = props;

  return (
    <img className={`heart ${active ? "" : "inactive"}`} src="/images/heart.svg" alt="heart" />
  );
}