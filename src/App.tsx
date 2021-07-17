import React, { useState } from "react";
import logo from "./logo.svg";
import Avatar from "./assets/images/avatar.png";
import ButtonCustom from "./components/Button/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    let data = count;
    setCount(++data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Avatar} alt="logo" />
        <ButtonCustom />
      </header>
    </div>
  );
}

export default App;
