// App.js
import React, { useState } from "react";
import "./style.css";
import Display from "./Display";
import Button from "./Button";

function App() {

  const [operatorStates, setOperatorStates] = useState({
    divideState: false,
    multiplyState: false,
    minusState: false,
    plusState: false,
  });

  const handleOperatorClick = (operator) => {
    // Create a new object with all operators set to false
    const newOperatorStates = Object.keys(operatorStates).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    // Toggle the state of the clicked operator
    newOperatorStates[operator] = !operatorStates[operator];

    console.log(newOperatorStates)
    setOperatorStates(newOperatorStates);
  };

  return (
    <div className="container">
      <Display />

      <div className="flex-grid">
        <Button className="top-operator-button">C</Button>
        <Button className="top-operator-button">+/-</Button>
        <Button className="top-operator-button">%</Button>
        <Button className="operator-button" isOn={operatorStates.divideState} onClick={() => handleOperatorClick("divideState")}>/</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button className="operator-button" isOn={operatorStates.multiplyState} onClick={() => handleOperatorClick("multiplyState")}>x</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button className="operator-button" isOn={operatorStates.minusState} onClick={() => handleOperatorClick("minusState")}>-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button className="operator-button" isOn={operatorStates.plusState} onClick={() => handleOperatorClick("plusState")}>+</Button>
        <Button className="zero-button">0</Button>
        <Button>.</Button>
        <Button className="equal-button">=</Button>
      </div>
    </div>
  );
}

export default App;
