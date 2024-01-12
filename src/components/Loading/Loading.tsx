import { ReactElement } from 'react';

import { Text } from './styles';

interface ILoadingProps {
  color: 'white' | 'black';
}

export const Loading = ({ color }: ILoadingProps): ReactElement => {
  return <Text color={color}>Loading...</Text>;
};
