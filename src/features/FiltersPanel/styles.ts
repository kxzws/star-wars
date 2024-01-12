import { styled } from '@mui/system';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import { COLORS } from '../../utils';

const DISABLED_COLOR = 'rgba(255, 255, 255, 0.5)';

export const Panel = styled('section')`
  width: 24%;
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

export const StyledFormControl = styled(FormControl)`
  font-family: 'Kanit';
  font-size: 16px;
  color: ${COLORS.white};
`;

export const StyledTextField = styled(TextField)`
  & > div {
    font-family: 'Kanit';
    font-size: 16px;
    color: ${COLORS.white};
    border: 1px solid ${COLORS.white};
    border-radius: 0;

    &.Mui-disabled {
      color: ${COLORS.white};
    }

    &.Mui-disabled > input::placeholder {
      -webkit-text-fill-color: ${DISABLED_COLOR};
    }

    & > input::placeholder {
      opacity: 0.85;
    }

    &.Mui-focused > fieldset.MuiOutlinedInput-notchedOutline {
      border-color: ${COLORS.white};
    }
  }
`;

export const StyledSelect = styled(Select)`
  font-family: 'Kanit';
  font-size: 16px;
  color: ${COLORS.white};

  &:hover > fieldset.MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.white};
  }

  & fieldset,
  &.Mui-focused > fieldset.MuiOutlinedInput-notchedOutline,
  &.Mui-disabled > fieldset.MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.white};
    border-radius: 0;
  }

  &.Mui-disabled > div {
    -webkit-text-fill-color: ${DISABLED_COLOR};
  }
`;

export const StyledSelectOption = styled(MenuItem)`
  font-family: 'Kanit';
  font-size: 16px;
`;

export const StyledFormLabel = styled(FormLabel)`
  margin-bottom: 2px;
  font-family: 'Kanit';
  font-size: 18px;
  color: ${COLORS.white};

  &.Mui-focused,
  &.Mui-disabled {
    color: ${COLORS.white};
  }
`;

export const StyledRadioOption = styled(FormControlLabel)`
  & > .MuiFormControlLabel-label {
    font-family: 'Kanit';
    font-size: 16px;
    color: ${COLORS.white};
  }

  & > span:first-of-type {
    padding: 2px 9px;
    color: ${COLORS.white};
  }

  & > span.Mui-checked {
    color: ${COLORS.lightYellow};
  }

  &.Mui-disabled > .MuiFormControlLabel-label {
    font-family: 'Kanit';
    font-size: 16px;
    color: ${DISABLED_COLOR};
  }

  &.Mui-disabled > span.Mui-checked {
    color: ${COLORS.white};
  }
`;

export const Label = styled('p')`
  margin-bottom: 8px;
  font-size: 18px;
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

  &.Mui-disabled {
    color: ${COLORS.white};
    border-color: ${COLORS.white};
  }
`;
