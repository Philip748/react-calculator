// Display.js
import React from "react";
import "./style.css";

function Display({children}) {
  return (
    <div className="display-class">
      <div className="display-num">{children}</div>
    </div>
  );
}

export default Display;