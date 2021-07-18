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
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState<string[]>();
  // const count = useRef(0);

  const { data, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    method: "GET",
  });

  const handleCount = () => {
    // count.current += 1;
    let data = count;
    setCount(++data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Avatar} alt="logo" />
        <strong>{count}</strong>
        <ButtonCustom count={count} setCount={setCount} />
        <button onClick={() => handleCount()}>increment</button>
      </header>

      {data ? <span>{JSON.stringify(data)}</span> : ""}
    </div>
  );
}

export default App;
