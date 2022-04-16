import styled from 'styled-components';

//* Mixins
import { Mixins } from '@/styles';

export const SearchBarStyled = styled.div`
  inline-size: 100%;
`;

export const SearchBarField = styled.input`
  ${Mixins.PaddingSize({
    startInline: 1,
    endInline: 1,
    startBlock: 1,
    endBlock: 1,
  })}
  inline-size: 100%;
  block-size: 100%;
  outline: none;
  border: solid 1px ${({ theme: { colors } }) => colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${({ theme: { fonts } }) => fonts.primary};
`;
