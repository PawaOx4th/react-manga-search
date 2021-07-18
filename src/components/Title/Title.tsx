import React, { ReactNode } from "react";
import { useFetch } from "@/hook/useFetch";
import { MangaAPIResponseType, MangaType } from "@/types/mangaType";

interface Props {
  children: ReactNode;
}

export default function Title(props: Props) {
  const { children } = props;

  const { data, error, isLoad } = useFetch<MangaAPIResponseType>(
    { method: "GET" },
    "https://api.jikan.moe/v3/search/manga?q=Fate/Zero"
  );

  return (
    <div>
      <code>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
        exercitationem in inventore odio ea vel soluta possimus ab nostrum.
        Dolorum.
      </code>
    </div>
  );
}
