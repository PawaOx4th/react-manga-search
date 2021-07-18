import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { useFetch } from "./hook/useFetch";
import axios from "axios";
import Avatar from "./assets/images/avatar.png";
import ButtonCustom from "./components/Button/Button";
import TitleComponent from "./components/Title/Title";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState<string[]>();

  const { data, error, isLoad } = useFetch(
    { method: "GET" },
    `https://jsonplaceholder.typicode.com/todos/1`
  );

  const handleCount = () => {
    // count.current += 1;
    let data = count;
    setCount(++data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Avatar} alt="logo" className="h-profile-md" />
      </header>
      <strong>{count}</strong>
      <ButtonCustom count={count} setCount={setCount} />
      {isLoad ?? "✅"}

      {data ? <span>{JSON.stringify(data)}</span> : ""}

      <TitleComponent>AAA</TitleComponent>
    </div>
  );
}

export default App;
