import React from "react";
import Heart from "./Heart";

function LifeBar(props) {
  return (
    <div className="life-bar">
      <Heart />
      <Heart />
      <Heart />
    </div>
  );
}

export default LifeBar;