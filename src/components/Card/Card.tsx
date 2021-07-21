import React from "react";
import { MangaType } from "@/types/mangaType";
import SampleImg from "@/assets/images/avatar.png";

interface Props {
  data: MangaType;
}

export default function CardComponent(props: Props) {
  const { data } = props;

  return (
    <div
      className=" 
     hover:cursor-pointer
     rounded-xl bg-gray-800 overflow-hidden
     w-full
     h-96
     flex
     flex-col
     flex-wrap
    "
    >
      <div className=" h-5/6 w-full ">
        <img
          loading="lazy"
          src={data?.image_url || SampleImg}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-1/6 w-full text-center flex justify-center items-center px-2 py-5  overflow-clip">
        <span className="font-bold text-scales-primary"> {data.title}</span>
      </div>
    </div>
  );
}
