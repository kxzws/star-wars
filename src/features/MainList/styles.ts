import { styled } from '@mui/system';
import Masonry from 'react-masonry-css';

import { COLORS, STYLE_ASSETS } from '../../utils';

export const MainList = styled('main')`
  flex: 1 1 auto;
  padding: 12px 74px;
  width: 100%;
  background-color: ${COLORS.darkGrey};
  ${STYLE_ASSETS.starBackground}
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

export const CountText = styled('p')`
  margin-bottom: 14px;
  font-size: 18px;
`;
