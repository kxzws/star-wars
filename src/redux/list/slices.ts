import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICharacter } from '../../services';
import { getListData } from './thunks';
import { ListState } from './types';

const initialState: ListState = {
  isLoading: false,
  error: null,
  list: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
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
      });
  },
});

export default listSlice.reducer;
