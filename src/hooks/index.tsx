import React, { useContext } from 'react';

//* Styled Components
import { HomeStyled } from '../screens/Home/styles';

//* Components
import { Header } from '@/components';

//* Context
import { SearchContext } from '@/context';

export const Home = () => {
  const { images } = useContext(SearchContext);

  return (
    <HomeStyled>
      <Header />
      <pre>{JSON.stringify(images, null, 2)}</pre>
    </HomeStyled>
  );
};
