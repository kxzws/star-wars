import { styled } from '@mui/system';
import Masonry from 'react-masonry-css';

import { COLORS } from '../../utils';

export const MainList = styled('main')`
  flex: 1 1 auto;
  padding: 12px 74px;
  width: 100%;
  background-color: ${COLORS.darkGrey};
  background-image: radial-gradient(white, rgba(255, 255, 255, 0.9) 2px, transparent 0),
    radial-gradient(white, rgba(255, 255, 255, 0.95) 1px, transparent 0),
    radial-gradient(white, rgba(255, 255, 255, 0.8) 1px, transparent 0),
    radial-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.85) 1px, transparent 0);
  background-size:
    550px 550px,
    350px 350px,
    250px 250px,
    150px 150px;
  background-position:
    0 0,
    40px 60px,
    130px 270px,
    70px 100px;
`;

export const MainMasonry = styled(Masonry)`
  display: flex;
  margin-left: -50px;
  width: auto;

  & .masonry {
    padding-left: 50px;
    background-clip: padding-box;

    & > div {
      margin-bottom: 35px;
    }
  }
`;
