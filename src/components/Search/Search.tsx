import React from "react";
import IconFind from "@/assets/images/icons/maximize-outline.svg";

export default function InputComponent() {
  return (
    <div className="relative  flex justify-start items-center min-w-full h-7 bg-white px-2 py-6 rounded-3xl">
      <svg
        className="fill-current text-gray-400 w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g data-name="Layer 2">
          <g data-name="maximize">
            <rect width="24" height="24" opacity="0" />
            <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
            <path d="M13 10h-1V9a1 1 0 0 0-2 0v1H9a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z" />
          </g>
        </g>
      </svg>
      {/*  */}
      <input
        type="text"
        placeholder="Seach..."
        className="text-gray-800 outline-none pl-3 text-xl"
      />
    </div>
  );
}
