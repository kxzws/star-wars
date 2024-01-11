import { styled } from '@mui/system';
import { Card, CardContent } from '@mui/material';

import { COLORS } from '../../utils';

export const CharacterCard = styled(Card)`
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGrey};
  border-radius: initial;
  box-shadow: 8px 8px 0px 0px ${COLORS.yellow};
  transition: all ease-out 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 14px 14px 0px 0px ${COLORS.lightYellow};
  }

  &:active {
    box-shadow: 10px 10px 0px 0px ${COLORS.lightYellow};
  }
`;

export const CharacterContent = styled(CardContent)`
  padding: 12px 24px 12px;

  &:last-child {
    padding-bottom: 12px;
  }
`;

export const CardHeadline = styled('h3')`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  text-align: right;
  text-transform: uppercase;
`;

export const CardLine = styled('div')`
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled('p')`
  font-style: italic;
`;
