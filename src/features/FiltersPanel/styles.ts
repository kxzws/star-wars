import { styled } from '@mui/system';
import { Button, FormControl, Select } from '@mui/material';

import { COLORS } from '../../utils';

export const Panel = styled('section')`
  width: 30%;
  padding: 12px 42px;
  display: flex;
  flex-flow: column;
  gap: 20px;
  background-color: ${COLORS.black};
`;

export const Headline = styled('h2')`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const BackgroundBox = styled('div')`
  width: 100%;
  color: ${COLORS.black};
  background-color: ${COLORS.white};
`;

export const StyledFormControl = styled(FormControl)`
  /* background-color: ${COLORS.white}; */
  /* border-radius: 4px; */
`;

export const StyledSelect = styled(Select)`
  /* background-color: ${COLORS.white}; */
  /* border-color: ${COLORS.lightYellow}; */
`;

export const ResetButton = styled(Button)`
  color: ${COLORS.yellow};
  border-color: ${COLORS.lightYellow};
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    border-color: ${COLORS.yellow};
    opacity: 1;
  }
`;
