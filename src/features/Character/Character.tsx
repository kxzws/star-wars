import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ICharacter, IFilm, ISpecies, IStarship, starWarsAPIService } from '../../services';
import { ErrorTypography, Loading } from '../../components';
import { parseIdFromURL } from '../../utils';

import {
  CardBlock,
  CardHeadline,
  CardLine,
  CharacterCard,
  CharacterCont,
  CharacterContent,
  Label,
  MainDescription,
} from './styles';

const VISIBLE_FIELDS = {
  gender: '',
  birth_year: '',
  height: 'cm',
  mass: 'kg',
  eye_color: '',
  hair_color: '',
  skin_color: '',
};

export const Character = (): ReactElement => {
  const { id } = useParams();

  const [fetchStatus, setFetchStatus] = useState<{
    isLoading: boolean;
    error: Error | null;
    data: ICharacter | null;
    species: ISpecies[] | null;
    starships: IStarship[] | null;
    films: IFilm[] | null;
  }>({ isLoading: false, error: null, data: null, species: null, starships: null, films: null });

  const fetchCharacterData = useCallback(async () => {
    if (id) {
      try {
        setFetchStatus((prev) => ({ ...prev, isLoading: true }));

        const data = await starWarsAPIService.getCharacter(id);
        const responses = await Promise.all([
          starWarsAPIService.getCertainSpecies(data.species.map((spec) => parseIdFromURL(spec))),
          starWarsAPIService.getCertainStarships(
            data.starships.map((starship) => parseIdFromURL(starship))
          ),
          starWarsAPIService.getCertainFilms(data.films.map((film) => parseIdFromURL(film))),
        ]);

        setFetchStatus((prev) => ({
          ...prev,
          isLoading: false,
          data,
          species: responses[0],
          starships: responses[1],
          films: responses[2],
        }));
      } catch (error) {
        setFetchStatus((prev) => ({ ...prev, isLoading: false, error: error as Error }));
      }
    }
  }, [id, starWarsAPIService]);

  useEffect(() => {
    fetchCharacterData();
  }, [fetchCharacterData]);

  return (
    <CharacterCont>
      {fetchStatus.error && <ErrorTypography>{fetchStatus.error.message}</ErrorTypography>}
      <CharacterCard>
        <CharacterContent>
          {fetchStatus.isLoading ? (
            <Loading color="black" />
          ) : (
            <>
              <CardHeadline>{fetchStatus.data?.name}</CardHeadline>

              <MainDescription>
                {(Object.keys(VISIBLE_FIELDS) as Array<keyof typeof VISIBLE_FIELDS>).map((field) =>
                  !!fetchStatus.data && fetchStatus.data[field as keyof ICharacter] ? (
                    <CardLine key={field}>
                      <Label>{field}:</Label>
                      <p>
                        {fetchStatus.data[field as keyof ICharacter]}
                        {fetchStatus.data[field as keyof ICharacter] === 'unknown'
                          ? ''
                          : ` ${VISIBLE_FIELDS[field]}`}
                      </p>
                    </CardLine>
                  ) : null
                )}
              </MainDescription>

              {fetchStatus.species && !!fetchStatus.species.length && (
                <CardBlock>
                  <Label>Species:</Label>
                  <p>{fetchStatus.species.map((spec) => spec.name).join(', ')}</p>
                </CardBlock>
              )}
              {fetchStatus.starships && !!fetchStatus.starships.length && (
                <CardBlock>
                  <Label>Starships:</Label>
                  <p>{fetchStatus.starships.map((starship) => starship.name).join(', ')}</p>
                </CardBlock>
              )}
              {fetchStatus.films && !!fetchStatus.films.length && (
                <CardBlock>
                  <Label>Films:</Label>
                  <p>{fetchStatus.films.map((film) => film.title).join(', ')}</p>
                </CardBlock>
              )}
            </>
          )}
        </CharacterContent>
      </CharacterCard>
    </CharacterCont>
  );
};
