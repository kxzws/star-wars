import { styled } from '@mui/system';
import { Card, CardContent } from '@mui/material';

import { COLORS, STYLE_ASSETS } from '../../utils';

export const CharacterCont = styled('section')`
  padding: 42px 24px;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.darkGrey};
  ${STYLE_ASSETS.starBackground}
`;

export const CharacterCard = styled(Card)`
  margin: 0 auto;
  width: 40%;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGrey};
  border-radius: initial;
  box-shadow: 8px 8px 0px 0px ${COLORS.yellow};
`;

export const CharacterContent = styled(CardContent)`
  padding: 16px 30px;

  &:last-child {
    padding-bottom: 16px;
  }
`;

export const CardHeadline = styled('h3')`
  margin-bottom: 12px;
  padding-bottom: 12px;
  font-size: 20px;
  font-weight: 700;
  text-align: right;
  text-transform: uppercase;
  border-bottom: 2px solid ${COLORS.lightGrey};
`;

export const MainDescription = styled('section')`
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${COLORS.lightGrey};
`;

export const CardLine = styled('div')`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CardBlock = styled('div')`
  margin-bottom: 12px;
  display: flex;
  flex-flow: column;
  gap: 6px;
`;

export const Label = styled('p')`
  font-style: italic;
`;
