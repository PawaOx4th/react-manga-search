import React from "react";
import AvatarLogo from "@/assets/images/avatar.png";

export default function Header() {
  return (
    <div className="grid grid-flow-row grid-cols-11 bg-scales-dark h-14  place-content-center ">
      <div className="col-span-12 lg:col-span-2 px-4 lg:pl-10 flex justify-between lg:justify-center items-center">
        <img src={AvatarLogo} className=" w-11 h-11 mr-0 lg:mr-3" />
        <p className=" text-xl font-bold">Manga Search</p>
      </div>
    </div>
  );
}
