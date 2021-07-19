import { SampleContext } from "@/App";
import React, { ReactNode, useContext } from "react";

interface Props {
  children?: ReactNode;
}

export default function Title(props: Props) {
  const { children } = props;
  const sampleContext = useContext(SampleContext);

  return (
    <div className=" text-scales-seccandary font-semibold text-4xl">
      Title
      <h2>{sampleContext?.count}</h2>
      <button
        className="px-4 py-2 bg-scales-seccandary"
        onClick={() => {
          sampleContext?.increment(sampleContext.count + 1);
        }}
      >
        🫖
      </button>
      <hr />
    </div>
  );
}
