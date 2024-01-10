import { createAsyncThunk } from '@reduxjs/toolkit';

import { starWarsAPIService } from '../../services';

export const getListData = createAsyncThunk('list/getListData', async (_, { rejectWithValue }) => {
  try {
    const data = await starWarsAPIService.getCharactes();
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
