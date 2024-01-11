import { styled } from '@mui/system';

import { COLORS } from '../../utils';

export const Header = styled('header')`
  padding: 22px 42px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.black};
`;

export const Headline = styled('h1')`
  font-family: 'Rubik Mono One';
  font-size: 32px;
  font-weight: 400;
`;
