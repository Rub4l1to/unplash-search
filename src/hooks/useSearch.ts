import React, { ChangeEvent, useRef, useCallback, useContext } from 'react';

//* Context
import { SearchContext } from '@/context';

export const useSearch = () => {
  const { searchSearchByTerm } = useContext(SearchContext);

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => searchSearchByTerm(query), 500);
  }, []);

  return {
    onQueryChanged,
  };
};
