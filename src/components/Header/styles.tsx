import styled from 'styled-components';

//* Global styles
import { Mixins } from '@/styles';

export const HeaderStyled = styled.div`
  ${Mixins.PaddingSize({
    startInline: 2,
    endInline: 2,
    startBlock: 1,
    endBlock: 1,
  })}

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: no-wrap;
`;

export const LogoContainer = styled.figure`
  display: flex;
  gap: 0.5rem; ;
`;

export const LogoImg = styled.img`
  object-fit: contain;
`;

export const LogoText = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.extrabold};
  font-size: 30px;
`;
