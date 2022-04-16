import { SearchState } from './SearchProvider';

//* Interfaces
import { IImages } from '@/interfaces';

type SearchAction = { type: 'SEARCH_SET_RESULTS'; payload: IImages.Images[] };

export const searchReducer = (state: SearchState, action: SearchAction): SearchState => {
  switch (action.type) {
    case 'SEARCH_SET_RESULTS':
      return { ...state, isLoading: false, images: action.payload };

    default:
      return state;
  }
};
