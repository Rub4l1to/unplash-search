import React, { createContext } from 'react';

//* Interfcaes
import { IImages } from '@/interfaces';

interface SearchContextProps {
  isLoading: boolean;
  images: IImages.Images[];
}

export const SearchContext = createContext<SearchContextProps>({} as SearchContextProps);
