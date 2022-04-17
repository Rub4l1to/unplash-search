import React from 'react';

//* Styled Components
import { HomeStyled } from './styles';

//* Components
import { Header, List } from '@/components';

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <List />
    </HomeStyled>
  );
};
