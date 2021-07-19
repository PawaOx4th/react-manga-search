import { SampleContext } from "@/App";
import React, { useContext } from "react";

export default function ContentComponent() {
  const sampleContext = useContext(SampleContext);
  return (
    <div className="text-6xl text-yellow-400 font-bold">
      ContentComponent
      <h3>{sampleContext?.count}</h3>
      <button
        className="px-4 py-2 bg-yellow-400"
        onClick={() => {
          sampleContext?.increment(sampleContext.count + 1);
        }}
      >
        ✅
      </button>
    </div>
  );
}
