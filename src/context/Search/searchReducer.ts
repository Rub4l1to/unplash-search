import { SearchState } from "./SearchProvider";

type SearchAction = {
  type: string;
  payload: any;
};

export const searchReducer = (
  state: SearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    default:
      return state;
  }
};
