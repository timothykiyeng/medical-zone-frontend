import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchResults = createAsyncThunk("results/fetchResults", () => {
  return fetch("https://medical-zone-backend-production.up.railway.app/medical_histories")
    .then((response) => response.json())
    .then((data) => data);
});

const ResultsSlice = createSlice({
  name: 'results',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchResults.pending](state) {
      state.status = 'loading';
    },
    [fetchResults.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default ResultsSlice.reducer