import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

export default function Loadding() {
  return (
    <div
      className="w-full min-h-screen  overflow-y-hidden  z-50 absolute bg-black opacity-50 blur-md flex justify-center items-center
    "
    >
      <BeatLoader color="#88F4FF" size="30px" />
    </div>
  );
}
