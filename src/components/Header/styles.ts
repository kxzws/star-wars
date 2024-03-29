import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

import { COLORS } from '../../styles';

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

export const Headline = styled(Link)`
  font-family: 'Rubik Mono One';
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;
