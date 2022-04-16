import React, { createContext } from "react";

interface SearchContextProps {}

export const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);
