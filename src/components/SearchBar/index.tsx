import React from 'react';

//* Hooks
import { useSearch } from '@/hooks';

//* Styled Components
import { SearchBarField, SearchBarStyled } from './styles';

export const SearchBar = () => {
  const { onQueryChanged } = useSearch();

  return (
    <SearchBarStyled>
      <SearchBarField placeholder="Search free high-resolution photos" onChange={onQueryChanged} />
    </SearchBarStyled>
  );
};
