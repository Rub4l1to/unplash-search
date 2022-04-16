import { SearchState } from './SearchProvider';

//* Interfaces
import { Images } from '../../interfaces/images';

type SearchAction = { type: 'SEARCH_SET_RESULTS'; payload: Images[] };

export const searchReducer = (state: SearchState, action: SearchAction): SearchState => {
  switch (action.type) {
    case 'SEARCH_SET_RESULTS':
      return { ...state, isLoading: false, images: action.payload };

    default:
      return state;
  }
};
