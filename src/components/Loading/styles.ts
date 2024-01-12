import styled from 'styled-components';

import { COLORS } from '../../styles';

export const Text = styled.h4<{ color: 'white' | 'black' }>`
  font-family: 'Rubik Mono One';
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ color }) => COLORS[color]};
  animation: shimmer 1s infinite;

  @keyframes shimmer {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0.6;
    }

    to {
      opacity: 1;
    }
  }
`;
