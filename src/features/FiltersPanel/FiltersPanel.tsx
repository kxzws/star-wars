import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Radio, RadioGroup, SelectChangeEvent } from '@mui/material';

import { useAppDispatch, useTypedSelector } from '../../hooks';
import { listSlice } from '../../redux/list/slices';
import { getMoviesData } from '../../redux/list/thunks';
import { parseIdFromURL } from '../../utils';

import {
  Headline,
  Label,
  Panel,
  ResetButton,
  StyledFormControl,
  StyledFormLabel,
  StyledRadioOption,
  StyledSelect,
  StyledSelectOption,
  StyledTextField,
} from './styles';
import { EGender } from '../../services';
import { ErrorTypography } from '../../components';

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

  const [searchValue, setSearchValue] = useState(nameSearch);

  useEffect(() => {
    dispatch(getMoviesData());
  }, [dispatch, getMoviesData]);

  useEffect(() => {
    const debounceTimeoutId = setTimeout(() => {
      dispatch(setNameSearch(searchValue));
    }, 700);
    return () => clearTimeout(debounceTimeoutId);
  }, [dispatch, setNameSearch, searchValue]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setSearchValue(e.target.value);
    },
    [setSearchValue]
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
      <StyledTextField
        fullWidth
        disabled={isLoading}
        id="name"
        type="search"
        size="small"
        placeholder="Name"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <StyledFormControl disabled={isLoading} fullWidth>
        <StyledFormLabel id="gender-label">Gender</StyledFormLabel>
        <RadioGroup
          aria-labelledby="gender-label"
          name="gender"
          value={genderFilter}
          onChange={handleRadioChange}
        >
          <StyledRadioOption value={EGender.ALL} control={<Radio />} label={EGender.ALL} />
          <StyledRadioOption value={EGender.FEMALE} control={<Radio />} label={EGender.FEMALE} />
          <StyledRadioOption value={EGender.MALE} control={<Radio />} label={EGender.MALE} />
          <StyledRadioOption value={EGender.OTHER} control={<Radio />} label={EGender.OTHER} />
        </RadioGroup>
      </StyledFormControl>
      {errorMovies && <ErrorTypography>{errorMovies.message}</ErrorTypography>}
      <StyledFormControl disabled={isLoading || isMoviesLoading} fullWidth>
        <StyledSelect
          id="movie"
          size="small"
          value={moviesFilter}
          onChange={handleSelectChange}
          inputProps={{ 'aria-label': 'Without label' }}
          displayEmpty
        >
          <StyledSelectOption disabled value="">
            Movie
          </StyledSelectOption>
          {movies.map((movie) => (
            <StyledSelectOption key={movie.title} value={parseIdFromURL(movie.url)}>
              {movie.title}
            </StyledSelectOption>
          ))}
        </StyledSelect>
      </StyledFormControl>
      <div>
        <Label>Mass</Label>
        <StyledFormControl fullWidth>
          <StyledTextField
            fullWidth
            disabled={isLoading}
            id="massFrom"
            type="number"
            size="small"
            placeholder="From"
            value={massFilter?.from || ''}
            onChange={handleMassFromChange}
          />
          <StyledTextField
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
      </div>
      <ResetButton
        disabled={isLoading || isMoviesLoading}
        variant="outlined"
        type="button"
        onClick={handleResetButtonClick}
      >
        Reset
      </ResetButton>
    </Panel>
  );
};
