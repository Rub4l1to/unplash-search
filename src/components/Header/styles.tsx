import styled from 'styled-components';

//* Global styles
import { Mixins, Animations } from '@/styles';

export const HeaderStyled = styled.div`
  ${Mixins.PaddingSize({
    startInline: 2,
    endInline: 2,
    startBlock: 1,
    endBlock: 1,
  })}
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: no-wrap;
  transition: all 300ms ease;

  &::before {
    content: '';
    height: 1px;
    box-shadow: inset -1px 1px 11px 5px ${({ theme: { colors } }) => colors.primary};
    inline-size: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
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
  inline-size: 0;
  visibility: hidden;
  @media (min-width: 720px) {
    inline-size: auto;
    visibility: visible;
    animation: ${Animations.fadeIn} 0.5s ease;
  }
`;
