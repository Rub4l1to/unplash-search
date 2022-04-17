import styled from 'styled-components';

//* Global styles
import { Animations } from '@/styles';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const SpinnerStyled = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border-left-color: ${({ theme: { colors } }) => colors.tertiary};
  animation: ${Animations.spin} 2s ease infinite;
`;
