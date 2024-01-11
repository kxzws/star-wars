import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EGender, ICharacter, IFilm } from '../../services';
import { getListData, getMoviesData } from './thunks';
import { IMassFilter, ListState } from './types';

const initialState: ListState = {
  isLoading: false,
  error: null,
  list: [],
  isMoviesLoading: false,
  errorMovies: null,
  movies: [],
  moviesFilter: '',
  nameSearch: '',
  genderFilter: EGender.ALL,
  massFilter: null,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setMoviesFilter(state, action: PayloadAction<string>) {
      const { payload } = action;
      state.moviesFilter = payload;
    },
    setNameSearch(state, action: PayloadAction<string>) {
      const { payload } = action;
      state.nameSearch = payload;
    },
    setGenderFilter(state, action: PayloadAction<EGender>) {
      const { payload } = action;
      state.genderFilter = payload;
    },
    setMassFilter(state, action: PayloadAction<IMassFilter | null>) {
      const { payload } = action;
      state.massFilter = payload;
    },
    clearFilters(state) {
      state.moviesFilter = initialState.moviesFilter;
      state.nameSearch = initialState.nameSearch;
      state.genderFilter = initialState.genderFilter;
      state.massFilter = initialState.massFilter;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getListData.fulfilled, (state, action: PayloadAction<ICharacter[]>) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getListData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      })
      .addCase(getMoviesData.pending, (state) => {
        state.isMoviesLoading = true;
        state.errorMovies = null;
      })
      .addCase(getMoviesData.fulfilled, (state, action: PayloadAction<IFilm[]>) => {
        state.movies = action.payload;
        state.isMoviesLoading = false;
      })
      .addCase(getMoviesData.rejected, (state, action) => {
        state.isMoviesLoading = false;
        state.errorMovies = action.payload as Error;
      });
  },
});

export default listSlice.reducer;
