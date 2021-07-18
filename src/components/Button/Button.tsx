import React from "react";

interface Props {
  count: number;
  setCount: Function;
}

function ButtonCustom(props: Props) {
  const { count, setCount } = props;

  const handleClick = () => {
    console.log("🥑");

    let data = count;
    setCount(++data);
  };

  return (
    <button
      className="text-white bg-scales-dark  px-5 py-2 rounded-lg cursor-pointer transition-all hover:bg-green-300"
      onClick={() => handleClick()}
    >
      Click
      <strong> {count}</strong>
    </button>
  );
}

export default ButtonCustom;
