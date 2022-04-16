import { css } from 'styled-components';

//* Interfaces
import { IStyled } from '@/interfaces';

export const PaddingSize = ({
  startBlock = 0,
  endBlock = 0,
  startInline = 0,
  endInline = 0,
}: IStyled.SpaceProps) => css`
  padding-inline-start: ${startInline}rem;
  padding-inline-end: ${endInline}rem;
  padding-block-start: ${startBlock}rem;
  padding-block-end: ${endBlock}rem;
`;

export const MarginSize = ({ startBlock = 0, endBlock = 0, startInline = 0, endInline = 0 }: IStyled.SpaceProps) => css`
  margin-inline-start: ${startInline}rem;
  margin-inline-end: ${endInline}rem;
  margin-block-start: ${startBlock}rem;
  margin-block-end: ${endBlock}rem;
`;
