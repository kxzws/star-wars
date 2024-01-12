import styled from 'styled-components';

import { COLORS } from '../../utils';

export const Text = styled.h4<{ color: 'white' | 'black' }>`
  font-family: 'Rubik Mono One';
  font-size: 18px;
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
