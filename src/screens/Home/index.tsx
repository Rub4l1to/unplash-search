import React from 'react';

//* Styled Components
import { HomeStyled } from './styles';

//* Components
import { Header } from '@/components';

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
    </HomeStyled>
  );
};
