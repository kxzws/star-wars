import { ReactElement } from 'react';

import { FiltersPanel, MainList } from '..';

import { Box } from './styles';

export const Main = (): ReactElement => {
  return (
    <Box>
      <FiltersPanel />
      <MainList />
    </Box>
  );
};
