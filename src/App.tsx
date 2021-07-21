import React, { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <HeaderComponent />
    </div>
  );
}

export default App;
