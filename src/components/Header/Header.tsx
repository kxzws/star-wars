import { ReactElement } from 'react';

import { Header as HeaderCont, Headline } from './styles';

export const Header = (): ReactElement => {
  return (
    <HeaderCont>
      <Headline>Star Wars Characters Explorer</Headline>
    </HeaderCont>
  );
};
