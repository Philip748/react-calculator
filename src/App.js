// App.js
import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    console.log("operatorStates updated:", operatorStates);
  }, [operatorStates]);

  const [readyToStartNewNumState, setReadyToStartNewNumState] = useState(false);
  useEffect(() => {
    console.log("readyToStartNewNumState updated:", readyToStartNewNumState);
  }, [readyToStartNewNumState]);

  const [displayState, setDisplayState] = useState("0");
  useEffect(() => {
    console.log("displayState updated:", displayState);
  }, [displayState]);

  const [storeState, setStoreState] = useState("0");
  useEffect(() => {
    console.log("storeState updated:", storeState);
  }, [storeState]);

  var newDisplayValue = "0";

  const computeAnswer = (resetOps) => {
    if (operatorStates.divideState) {
      console.log(storeState, "/" ,displayState);
      newDisplayValue = (parseFloat(storeState) / parseFloat(displayState)).toString();
    }
    else if (operatorStates.multiplyState) {
      console.log(storeState, "*" ,displayState);
      newDisplayValue = (parseFloat(storeState) * parseFloat(displayState)).toString();
    }
    else if (operatorStates.minusState) {
      console.log(storeState, "-" ,displayState);
      newDisplayValue = (parseFloat(storeState) - parseFloat(displayState)).toString();
    }
    else if (operatorStates.plusState) {
      console.log(storeState, "+" ,displayState);
      newDisplayValue = (parseFloat(storeState) + parseFloat(displayState)).toString();
    }
    else{
      newDisplayValue = displayState;
    };
  
    // Update displayState directly
    setDisplayState(newDisplayValue);
  
    if (resetOps){
      // Create a new object with all operators set to false
      const newOperatorStates = Object.keys(operatorStates).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      setOperatorStates(newOperatorStates);
    };
    setStoreState("0");
  };
  

  const handleOperatorClick = (operator) => {
    if(readyToStartNewNumState){
      console.log("check 1");
      setStoreState("0");
    }
    else {
      if (storeState != 0){
        console.log("check 2");
        computeAnswer(false);
        setStoreState(newDisplayValue);
      }
      else {
        setStoreState(displayState);
      };
    };

    // Create a new object with all operators set to false
    const newOperatorStates = Object.keys(operatorStates).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    // Toggle the state of the clicked operator
    newOperatorStates[operator] = true;

    setOperatorStates(newOperatorStates);
    setReadyToStartNewNumState(true);
  };

  const handleNumberClick = (digit) => {
  
    if (readyToStartNewNumState) {
      setStoreState(displayState)
      setDisplayState("0");
      setReadyToStartNewNumState(false);
    }
  
    // Use the functional form of setState to ensure the latest state is used
    setDisplayState(prevState => appendDigit(prevState, digit));
  };

  const handleClearClick = (digit) => {
    setDisplayState("0");
    // Create a new object with all operators set to false
    const newOperatorStates = Object.keys(operatorStates).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setOperatorStates(newOperatorStates);
    setReadyToStartNewNumState(false);
    setStoreState("0");
  };

  function appendDigit(number, digit) {
    // If digit is not ".", handle non-decimal digits
    console.log(number.toString(), "+", digit.toString(), "=", number.toString() + digit.toString());
    console.log(number.toString(), "+", digit.toString(), "=", parseFloat(number.toString() + digit.toString()));
    if (digit === "." && number.includes(".")) {
      return (number.toString());
    } else if (number === "0") {
      if (digit === ".") {
        return ("0".toString() + digit.toString());
      } else {
        return (digit.toString());
      }
    } else {
        return (number.toString() + digit.toString());
    }
  };

  const div100 = () => {
    setDisplayState(displayState / 100);
  };

  return (
    <div className="container">
      <Display>{displayState}</Display>

      <div className="flex-grid">
        <Button onClick={() => handleClearClick()}className="top-operator-button">C</Button>
        <Button className="top-operator-button">+/-</Button>
        <Button className="top-operator-button" onClick={() => div100()}>%</Button>
        <Button className="operator-button" isOn={operatorStates.divideState} onClick={() => handleOperatorClick("divideState")}>/</Button>
        <Button onClick={() => handleNumberClick("7")}>7</Button>
        <Button onClick={() => handleNumberClick("8")}>8</Button>
        <Button onClick={() => handleNumberClick("9")}>9</Button>
        <Button className="operator-button" isOn={operatorStates.multiplyState} onClick={() => handleOperatorClick("multiplyState")}>x</Button>
        <Button onClick={() => handleNumberClick("4")}>4</Button>
        <Button onClick={() => handleNumberClick("5")}>5</Button>
        <Button onClick={() => handleNumberClick("6")}>6</Button>
        <Button className="operator-button" isOn={operatorStates.minusState} onClick={() => handleOperatorClick("minusState")}>-</Button>
        <Button onClick={() => handleNumberClick("1")}>1</Button>
        <Button onClick={() => handleNumberClick("2")}>2</Button>
        <Button onClick={() => handleNumberClick("3")}>3</Button>
        <Button className="operator-button" isOn={operatorStates.plusState} onClick={() => handleOperatorClick("plusState")}>+</Button>
        <Button className="zero-button" onClick={() => handleNumberClick(0)}>0</Button>
        <Button onClick={() => handleNumberClick(".")}>.</Button>
        <Button className="equal-button" onClick={() => computeAnswer(true)}>=</Button>
      </div>
    </div>
  );
}

export default App;
