import { EGender, ICharacter, IFilm } from '../../services';

export interface IMassFilter {
  from: number | null;
  to: number | null;
}

export interface ListState {
  isLoading: boolean;
  error: Error | null;
  list: ICharacter[];
  isMoviesLoading: boolean;
  errorMovies: Error | null;
  movies: IFilm[];
  moviesFilter: string;
  nameSearch: string;
  genderFilter: EGender;
  massFilter: IMassFilter | null;
}
