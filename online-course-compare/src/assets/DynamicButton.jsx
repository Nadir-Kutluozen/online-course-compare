import React, { useRef, useState } from "react";
import "./Button.css";

const DynamicButton = ({ children }) => {
  const buttonRef = useRef(null);
  const [hoverDir, setHoverDir] = useState("left");
  const [hovering, setHovering] = useState(false);

  const getDirection = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    return e.clientX - rect.left < rect.width / 2 ? "left" : "right";
  };

  const handleMouseEnter = (e) => {
    setHoverDir(getDirection(e));
    setHovering(true);
  };

  const handleMouseLeave = (e) => {
    setHoverDir(getDirection(e)); // keep origin same as exit
    setHovering(false);
  };

  return (
    <button
      ref={buttonRef}
      className={`dynamic-button btn rounded-5 ${hoverDir} ${hovering ? "hovering" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{children}</span>
    </button>
  );
};

export default DynamicButton;
