// Button.js
import React from "react";
import "./style.css";

function Button({ className, children }) {
  return <button className={`button-class ${className}`}>{children}</button>;
}

export default Button;