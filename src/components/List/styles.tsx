import styled from 'styled-components';

//* Global styles
import { Mixins, Animations } from '@/styles';

export const ListStyled = styled.div`
  ${Mixins.PaddingSize({
    startInline: 2,
    endInline: 2,
    startBlock: 1,
    endBlock: 1,
  })}
  display: flex;
  justify-content: center;
  background-color: #eee;
  min-block-size: calc(100vh - 5.5rem);
`;

export const ListContainer = styled.ul`
  column-count: 1;
  inline-size: 75rem;
  place-items: center;

  @media (min-width: 720px) {
    column-count: 2;
  }
  @media (min-width: 1200px) {
    column-count: 3;
  }
`;

export const Item = styled.li`
  animation: ${Animations.fadeIn} 0.5s ease-in-out;
  ${Mixins.PaddingSize({
    startInline: 0.625,
    endInline: 0.625,
    startBlock: 0.625,
    endBlock: 0.625,
  })}
  ${Mixins.MarginSize({
    startBlock: 2.5,
  })}
  inline-size: 100%;
  display: inline-block;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
  }

  @media (min-width: 720px) {
    inline-size: 340px;
  }
  @media (min-width: 1200px) {
    inline-size: 400px;
  }
`;

export const ItemImage = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 5px;
`;

export const ItemDescription = styled.p`
  ${Mixins.PaddingSize({
    startBlock: 0.625,
    endBlock: 0.625,
  })}
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  text-transform: capitalize;
`;

export const ItemLink = styled.a`
  color: ${({ theme: { colors } }) => colors.fifth};
`;
