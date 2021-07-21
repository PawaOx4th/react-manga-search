import React, { useState } from "react";
import "./App.css";
import HeaderComponent from "@/components/Header";
import SearchComponent from "@/components/Search/Search";

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="App">
      <HeaderComponent />
      <div>
        <SearchComponent />
      </div>
    </div>
  );
}

export default App;
