import { styled } from '@mui/system';
import { Card, CardContent } from '@mui/material';

export const CharacterCard = styled(Card)`
  background-color: #edece6;
  border: 1px solid rgba(12, 9, 10, 0.4);
  border-radius: initial;
  box-shadow: 8px 8px 0px 0px #ffe81f;
  transition: all ease-out 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 14px 14px 0px 0px rgba(255, 232, 31, 0.85);
  }

  &:active {
    box-shadow: 10px 10px 0px 0px rgba(255, 232, 31, 0.85);
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
