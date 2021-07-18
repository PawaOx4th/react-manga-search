import React, { ReactNode } from "react";
import { useFetch } from "@/hook/useFetch";
interface Props {
  children: ReactNode;
}

export default function Title(props: Props) {
  const { children } = props;

  const { data, error, isLoad } = useFetch(
    { method: "GET" },
    "https://api.jikan.moe/v3/search/manga?q=Fate/Zero"
  );

  return <div>{children}</div>;
}
