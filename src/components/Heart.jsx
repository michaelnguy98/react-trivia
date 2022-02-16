import React from "react";
import { motion } from "framer-motion";

const variants = {
  active: { opacity: 1, scale: 1 },
  inactive: { opacity: 0.4, scale: 0.8 },
}

/**
 * Returns the component that represents one of the lives the player has in a
 * game. The heart has two states, one where the player still has that life, and
 * one where they no longer have it.
 *
 * @param {*} props The necessary properties passed from parent components.
 * @returns {JSX.Element} A Heart component.
 */
export default function Heart(props) {
  const { isActive } = props;

  return (
    <motion.img
      className="heart"
      src="/images/heart.svg"
      alt="heart"
      animate={isActive ? "active" : "inactive"}
      variants={variants}
    />
  );
}