import { ICharacter } from '../../services';

export interface ListState {
  isLoading: boolean;
  error: Error | null;
  list: ICharacter[];
}
