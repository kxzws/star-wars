import { useParams } from 'react-router-dom';

import * as styles from './styles';

export const Character = () => {
  const { id } = useParams();

  return <styles.Character>Character {id}</styles.Character>;
};
