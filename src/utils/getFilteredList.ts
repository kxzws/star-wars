import { EGender, ICharacter } from '../services';
import { IMassFilter } from '../redux/list/types';
import { parseIdFromURL } from './parseIdFromURL';

export const getFilteredList = (
  list: ICharacter[],
  moviesFilter: string,
  nameSearch: string,
  genderFilter: EGender,
  massFilter: IMassFilter | null
): ICharacter[] => {
  const copy = list.slice();
  const result = copy.filter((item) => {
    const moviesCopy = item.films;
    const itemMoviesId = moviesCopy.map((movie) => parseIdFromURL(movie));
    const isMoviesMatch = !moviesFilter || itemMoviesId.includes(moviesFilter);

    const isNameMatch =
      !nameSearch || item.name.toLocaleLowerCase().includes(nameSearch.trim().toLowerCase());

    const isGenderMatchOther =
      genderFilter === EGender.OTHER &&
      (item.gender.toLowerCase() === 'n/a' || item.gender.toLowerCase() === 'unknown');
    const isGenderMatch =
      genderFilter === EGender.ALL ||
      genderFilter.toLocaleLowerCase() === item.gender.toLowerCase() ||
      isGenderMatchOther;

    const itemMass = parseFloat(item.mass);
    const isMassMatch =
      !massFilter ||
      (!massFilter.from && !massFilter.to) ||
      (!!massFilter.from && itemMass > massFilter.from && !massFilter.to) ||
      (!massFilter.from && !!massFilter.to && itemMass < massFilter.to);

    return isMoviesMatch && isNameMatch && isGenderMatch && isMassMatch;
  });

  return result;
};
