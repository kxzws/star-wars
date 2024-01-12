import { ReactElement } from 'react';

import { Text } from './styles';

interface IErrorTypographyProps {
  children?: React.ReactNode;
}

export const ErrorTypography = ({ children }: IErrorTypographyProps): ReactElement => {
  return <Text>{children}</Text>;
};
