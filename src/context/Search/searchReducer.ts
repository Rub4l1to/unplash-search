import { SearchState } from './SearchProvider';

//* Interfaces
import { IImages } from '@/interfaces';

type SearchAction = { type: 'SET_LOADING' } | { type: 'SEARCH_SET_RESULTS'; payload: IImages.Result[] };

export const searchReducer = (state: SearchState, action: SearchAction): SearchState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: true };
    case 'SEARCH_SET_RESULTS':
      return { ...state, isLoading: false, images: action.payload };

    default:
      return state;
  }
};
