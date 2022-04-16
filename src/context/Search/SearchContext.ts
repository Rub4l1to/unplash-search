import React, { createContext } from 'react';

//* Interfaces
import { Images } from '../../interfaces/images';

interface SearchContextProps {
  isLoading: boolean;
  images: Images[];
}

export const SearchContext = createContext<SearchContextProps>({} as SearchContextProps);
