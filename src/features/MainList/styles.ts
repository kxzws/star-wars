import { styled } from '@mui/system';
import Masonry from 'react-masonry-css';

import { COLORS, MEDIA_ENDPOINTS, STYLE_ASSETS } from '../../styles';

export const MainList = styled('main')`
  flex: 1 1 auto;
  padding: 12px 74px;
  width: 100%;
  background-color: ${COLORS.darkGrey};
  ${STYLE_ASSETS.starBackground}

  @media screen and (max-width: ${MEDIA_ENDPOINTS.wideTablet}) {
    padding: 12px 36px;
  }

  @media screen and (max-width: ${MEDIA_ENDPOINTS.tablet}) {
    padding: 12px 24px;
  }
`;

export const MainMasonry = styled(Masonry)`
  margin-left: -50px;
  width: auto;
  display: flex;

  & .masonry {
    padding-left: 50px;
    background-clip: padding-box;

    & > div {
      margin-bottom: 35px;
    }
  }

  @media screen and (max-width: ${MEDIA_ENDPOINTS.tablet}) {
    margin-left: -30px;

    & .masonry {
      padding-left: 30px;

      & > div {
        margin-bottom: 24px;
      }
    }
  }
`;

export const CountText = styled('p')`
  margin-bottom: 14px;
  font-size: 1.125rem;
`;
