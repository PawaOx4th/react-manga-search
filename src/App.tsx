import HeaderComponent from "@/components/Header";
import SearchComponent from "@/components/Search/Search";
import React, { useState } from "react";
import { useFetch } from "@/hook/useFetch";
import "./App.css";
import { JsonInterface } from "./types/jsonType";
import CardComponent from "./components/Card/Card";
import { MangaAPIResponseType } from "./types/mangaType";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [keyword, setKeyword] = useState("Doremon");
  const num = 12;

  const { data, error, isLoad } = useFetch<MangaAPIResponseType>(
    { method: "GET" },
    `https://api.jikan.moe/v3/search/manga?q=${keyword}`
  );

  return (
    <div className="App">
      <HeaderComponent />
      <div className="w-10/12 lg:w-9/12 my-0 mx-auto">
        <div className="grid gap-5 grid-flow-row grid-cols-12">
          <div className="col-span-12 flex justify-center items-center mt-20 mb-16 lg:mt-44">
            <div className="lg:w-6/12">
              <SearchComponent />
            </div>
          </div>
          {data
            ? data.results.map((item) => {
                return (
                  <div
                    key={item.mal_id}
                    className="col-span-12 lg:col-span-3 h-full"
                  >
                    <CardComponent data={item} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
