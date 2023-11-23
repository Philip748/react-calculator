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
    setStoreState(displayState)
    setDisplayState(0)
  };

  const [displayState, setDisplayState] = useState(0);

  const [storeState, setStoreState] = useState(0);

  const handleNumberClick = (digit) => {
    setDisplayState(appendDigit(displayState, digit));
  };

  const handleClearClick = (digit) => {
    setDisplayState(0);
  };

  function appendDigit(number, digit){
    console.log(number)
    if (digit == ".") {
      var output = number + digit;
    }
    else{
      var output = (10 * number) + digit;
    }
    return output;
  };

  return (
    <div className="container">
      <Display>{displayState}</Display>

      <div className="flex-grid">
        <Button onClick={() => handleClearClick()}className="top-operator-button">C</Button>
        <Button className="top-operator-button">+/-</Button>
        <Button className="top-operator-button">%</Button>
        <Button className="operator-button" isOn={operatorStates.divideState} onClick={() => handleOperatorClick("divideState")}>/</Button>
        <Button onClick={() => handleNumberClick(7)}>7</Button>
        <Button onClick={() => handleNumberClick(8)}>8</Button>
        <Button onClick={() => handleNumberClick(9)}>9</Button>
        <Button className="operator-button" isOn={operatorStates.multiplyState} onClick={() => handleOperatorClick("multiplyState")}>x</Button>
        <Button onClick={() => handleNumberClick(4)}>4</Button>
        <Button onClick={() => handleNumberClick(5)}>5</Button>
        <Button onClick={() => handleNumberClick(6)}>6</Button>
        <Button className="operator-button" isOn={operatorStates.minusState} onClick={() => handleOperatorClick("minusState")}>-</Button>
        <Button onClick={() => handleNumberClick(1)}>1</Button>
        <Button onClick={() => handleNumberClick(2)}>2</Button>
        <Button onClick={() => handleNumberClick(3)}>3</Button>
        <Button className="operator-button" isOn={operatorStates.plusState} onClick={() => handleOperatorClick("plusState")}>+</Button>
        <Button className="zero-button" onClick={() => handleNumberClick(0)}>0</Button>
        <Button onClick={() => handleNumberClick(".")}>.</Button>
        <Button className="equal-button">=</Button>
      </div>
    </div>
  );
}

export default App;
