import React, { useReducer } from 'react';

//* Interfaces
import { IImages } from '@/interfaces';

import { SearchContext } from './SearchContext';
import { searchReducer } from './searchReducer';

export interface SearchState {
  isLoading: boolean;
  images: IImages.Images[];
}

const INITIAL_STATE: SearchState = {
  isLoading: false,
  images: [],
};

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
