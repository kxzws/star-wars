import { styled } from '@mui/system';
import { Card, CardContent } from '@mui/material';

import { COLORS } from '../../utils';

export const CharacterCont = styled('section')`
  padding: 42px 24px;
  height: 100%;
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
