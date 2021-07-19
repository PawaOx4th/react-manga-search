import React, { useState } from "react";
import "./App.css";
import Avatar from "./assets/images/avatar.png";
import ContentComponent from "./components/Content/Content";
import TitleComponent from "./components/Title/Title";

interface SampleContextInterface {
  count: number;
  increment: Function;
}

export const SampleContext = React.createContext<SampleContextInterface | null>(
  null
);

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <SampleContext.Provider value={{ count: state, increment: setState }}>
        <div className="w-8/12 my-0 mx-auto ">
          <img src={Avatar} alt="logo" className="h-profile-md" />
          <TitleComponent />
          <ContentComponent></ContentComponent>
        </div>
      </SampleContext.Provider>
    </div>
  );
}

export default App;
