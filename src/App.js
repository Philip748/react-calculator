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

  const [readyToStartNewNumState, setReadyToStartNewNumState] = useState(false);

  const computeAnswer = () => {
    if (operatorStates.divideState) {
      setDisplayState(storeState / displayState);
    };
    if (operatorStates.multiplyState) {
      setDisplayState(storeState * displayState);
    };
    if (operatorStates.minusState) {
      setDisplayState(storeState - displayState);
    };
    if (operatorStates.plusState) {
      setDisplayState(storeState + displayState);
    };

    // Create a new object with all operators set to false
    const newOperatorStates = Object.keys(operatorStates).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setOperatorStates(newOperatorStates);
    setStoreState(0)
  };

  const handleOperatorClick = (operator) => {
    if (storeState != 0){
      computeAnswer();
    };

    // Create a new object with all operators set to false
    const newOperatorStates = Object.keys(operatorStates).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    // Toggle the state of the clicked operator
    newOperatorStates[operator] = !operatorStates[operator];

    setOperatorStates(newOperatorStates);
    setStoreState(displayState);
    setReadyToStartNewNumState(true);
  };

  const [displayState, setDisplayState] = useState(0);

  const [storeState, setStoreState] = useState(0);

  const handleNumberClick = (digit) => {
    console.log(readyToStartNewNumState);
    if (readyToStartNewNumState) {
      console.log(displayState);
      setDisplayState(0);
      console.log(displayState);
      setReadyToStartNewNumState(false);
    };
    setDisplayState(appendDigit(displayState, digit));
  };

  const handleClearClick = (digit) => {
    setDisplayState(0);
    // Create a new object with all operators set to false
    const newOperatorStates = Object.keys(operatorStates).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setOperatorStates(newOperatorStates);
    setReadyToStartNewNumState(false);
    setStoreState(0);
  };

  function appendDigit(number, digit){
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
        <Button className="equal-button" onClick={() => computeAnswer()}>=</Button>
      </div>
    </div>
  );
}

export default App;
