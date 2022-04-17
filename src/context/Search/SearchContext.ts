import React, { createContext } from 'react';

//* Interfcaes
import { IImages } from '@/interfaces';

interface SearchContextProps {
  isLoading: boolean;
  images: IImages.Result[];

  //* Methods
  searchSearchByTerm: (query: string) => Promise<IImages.Result[]>;
}

export const SearchContext = createContext<SearchContextProps>({} as SearchContextProps);
