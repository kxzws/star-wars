import { ReactElement, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICharacter } from '../../services';
import { parseIdFromURL } from '../../utils';

import { CharacterCard, CharacterContent, CardHeadline, CardLine, Label } from './styles';

const VISIBLE_FIELDS = {
  gender: '',
  birth_year: '',
  height: 'cm',
  mass: 'kg',
};

interface CharacterItemProps {
  data: ICharacter;
}

export const CharacterItem = ({ data }: CharacterItemProps): ReactElement => {
  const navigate = useNavigate();

  const characterId = useMemo(() => parseIdFromURL(data.url), [data]);

  const handleCardClick = useCallback(() => {
    navigate(`/characters/${characterId}`);
  }, [navigate, characterId]);

  return (
    <CharacterCard>
      <CharacterContent onClick={handleCardClick}>
        <CardHeadline>{data.name}</CardHeadline>

        {(Object.keys(VISIBLE_FIELDS) as Array<keyof typeof VISIBLE_FIELDS>).map((field) =>
          data[field as keyof ICharacter] ? (
            <CardLine key={field}>
              <Label>{field}:</Label>
              <p>
                {data[field as keyof ICharacter]}
                {data[field as keyof ICharacter] === 'unknown' ? '' : ` ${VISIBLE_FIELDS[field]}`}
              </p>
            </CardLine>
          ) : null
        )}
      </CharacterContent>
    </CharacterCard>
  );
};
