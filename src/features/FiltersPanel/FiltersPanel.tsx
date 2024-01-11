import { ReactElement, useCallback, useEffect } from 'react';
import {
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

import { useAppDispatch, useTypedSelector } from '../../hooks';
import { listSlice } from '../../redux/list/slices';
import { getMoviesData } from '../../redux/list/thunks';
import { parseIdFromURL } from '../../utils';

import {
  BackgroundBox,
  Headline,
  Panel,
  ResetButton,
  StyledFormControl,
  StyledSelect,
} from './styles';
import { EGender } from '../../services';

export const FiltersPanel = (): ReactElement => {
  const {
    isLoading,
    isMoviesLoading,
    errorMovies,
    movies,
    moviesFilter,
    nameSearch,
    genderFilter,
    massFilter,
  } = useTypedSelector((state) => state.list);
  const { clearFilters, setMoviesFilter, setNameSearch, setGenderFilter, setMassFilter } =
    listSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMoviesData());
  }, [dispatch, getMoviesData]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      dispatch(setNameSearch(e.target.value));
    },
    []
  );

  const handleRadioChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch(setGenderFilter(e.target.value as EGender));
    },
    [dispatch, setGenderFilter]
  );

  const handleSelectChange = useCallback(
    (e: SelectChangeEvent<unknown>): void => {
      dispatch(setMoviesFilter(e.target.value as string));
    },
    [dispatch, setMoviesFilter]
  );

  const handleMassFromChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      dispatch(
        setMassFilter({ from: parseInt(e.target.value, 10) || null, to: massFilter?.to || null })
      );
    },
    [dispatch, setMassFilter, massFilter]
  );

  const handleMassToChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      dispatch(
        setMassFilter({ from: massFilter?.from || null, to: parseInt(e.target.value, 10) || null })
      );
    },
    [dispatch, setMassFilter, massFilter]
  );

  const handleResetButtonClick = useCallback((): void => {
    dispatch(clearFilters());
  }, [dispatch, clearFilters]);

  return (
    <Panel>
      <Headline>Filters</Headline>
      <BackgroundBox>
        <TextField
          fullWidth
          disabled={isLoading}
          id="name"
          type="search"
          size="small"
          placeholder="Name"
          value={nameSearch}
          onChange={handleSearchChange}
        />
      </BackgroundBox>
      <BackgroundBox>
        <StyledFormControl disabled={isLoading} fullWidth>
          <FormLabel id="gender-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="gender-label"
            name="gender"
            value={genderFilter}
            onChange={handleRadioChange}
          >
            <FormControlLabel value={EGender.ALL} control={<Radio />} label={EGender.ALL} />
            <FormControlLabel value={EGender.FEMALE} control={<Radio />} label={EGender.FEMALE} />
            <FormControlLabel value={EGender.MALE} control={<Radio />} label={EGender.MALE} />
            <FormControlLabel value={EGender.OTHER} control={<Radio />} label={EGender.OTHER} />
          </RadioGroup>
        </StyledFormControl>
      </BackgroundBox>
      {errorMovies && `error: ${errorMovies.message}`}
      <BackgroundBox>
        <StyledFormControl disabled={isLoading || isMoviesLoading} fullWidth>
          <StyledSelect
            labelId="select-label"
            id="movie"
            label="Movie"
            size="small"
            value={moviesFilter}
            onChange={handleSelectChange}
            inputProps={{ 'aria-label': 'Without label' }}
            displayEmpty
          >
            <MenuItem disabled value="">
              Movie
            </MenuItem>
            {movies.map((movie) => (
              <MenuItem key={movie.title} value={parseIdFromURL(movie.url)}>
                {movie.title}
              </MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
      </BackgroundBox>
      Mass
      <BackgroundBox>
        <StyledFormControl fullWidth>
          <TextField
            fullWidth
            disabled={isLoading}
            id="massFrom"
            type="number"
            size="small"
            placeholder="From"
            value={massFilter?.from || ''}
            onChange={handleMassFromChange}
          />
          <TextField
            fullWidth
            disabled={isLoading}
            id="massTo"
            type="number"
            size="small"
            placeholder="To"
            value={massFilter?.to || ''}
            onChange={handleMassToChange}
          />
        </StyledFormControl>
      </BackgroundBox>
      <ResetButton variant="outlined" type="button" onClick={handleResetButtonClick}>
        Reset
      </ResetButton>
    </Panel>
  );
};
