import React, { useReducer } from "react";

import { SearchContext } from "./SearchContext";
import { searchReducer } from "./searchReducer";

export interface SearchState {}

const INITIAL_STATE: SearchState = {};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const SearchProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
