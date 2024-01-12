import { styled } from '@mui/system';

import { MEDIA_ENDPOINTS } from '../../styles';

export const Box = styled('div')`
  height: 100%;
  display: flex;

  @media screen and (max-width: ${MEDIA_ENDPOINTS.narrowTablet}) {
    display: block;
  }
`;
