// App.js
import React from "react";
import "./style.css";
import Display from "./Display";
import Button from "./Button";

function App() {
  return (
    <div className="container">
      <Display />

      <div className="flex-grid">
        <Button className="top-operator-button">C</Button>
        <Button className="top-operator-button">+/-</Button>
        <Button className="top-operator-button">%</Button>
        <Button className="operator-button">/</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button className="operator-button">x</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button className="operator-button">-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button className="operator-button">+</Button>
        <Button className="zero-button">0</Button>
        <Button>.</Button>
        <Button className="operator-button">=</Button>
      </div>
    </div>
  );
}

export default App;
