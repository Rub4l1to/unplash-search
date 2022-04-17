import React, { useReducer } from 'react';

//* Interfaces
import { IImages } from '@/interfaces';

import { SearchContext } from './SearchContext';
import { searchReducer } from './searchReducer';
import { unplashApi } from '../../apis/unplashApi';

export interface SearchState {
  isLoading: boolean;
  images: IImages.Result[];
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

  const searchSearchByTerm = async (query: string): Promise<IImages.Result[]> => {
    dispatch({ type: 'SET_LOADING' });

    const resp = await unplashApi.get<IImages.Images>('', {
      params: {
        per_page: 20,
        query,
      },
    });

    dispatch({ type: 'SEARCH_SET_RESULTS', payload: resp.data.results });

    return resp.data.results;
  };

  return (
    <SearchContext.Provider
      value={{
        ...state,

        //* Methods
        searchSearchByTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
