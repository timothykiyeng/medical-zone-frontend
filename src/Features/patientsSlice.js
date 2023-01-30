import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPatients = createAsyncThunk("patients/fetchPatients", () => {
  return fetch("https://medical-zone-backend-production.up.railway.app/patients")
    .then((response) => response.json())
    .then((data) => data);
});

const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchPatients.pending](state) {
      state.status = 'loading';
    },
    [fetchPatients.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default patientsSlice.reducer