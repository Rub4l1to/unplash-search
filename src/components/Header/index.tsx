import React from 'react';

//* Components
import { SearchBar } from '@/components';

//* Styled Components
import { LogoContainer, LogoImg, LogoText, HeaderStyled } from './styles';

//* Assets
import { Images } from '@/assets';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoContainer>
        <LogoImg src={Images.logoSRC} alt="Unplash logo" />
        <LogoText>Unplash</LogoText>
      </LogoContainer>
      <SearchBar />
    </HeaderStyled>
  );
};
