// Button.js
import React from "react";
import "./style.css";

function Button({ className, children, isOn, onClick }) {
  const handleClick = () => {
    onClick(); // Call the parent component's function to update state
  };

  // Dynamic style based on whether the button is on or off
  const buttonStyle = {
    filter: isOn && className === "operator-button" ? "brightness(120%)" : "brightness(100%)",
  };

  return (
    <button
      className={`button-class ${className} ${isOn ? "operator-on" : ""}`}
      style={buttonStyle}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
