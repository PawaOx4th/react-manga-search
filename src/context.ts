import { createContext } from "react";
import { SearchKeywordContextInterface } from "./types/serchKeywordContextType";

export const SearchKeywordContext =
  createContext<SearchKeywordContextInterface>({
    keyword: "",
    serch: () => {},
  });
