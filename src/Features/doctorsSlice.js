import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDoctors = createAsyncThunk("doctors/fetchDoctors", () => {
  return fetch("http://127.0.0.1:3000/doctors")
    .then((response) => response.json())
    .then((data) => data);
});
export const fetchDoctor = createAsyncThunk("doctor/fetchDoctor", (id) => {
  return fetch(`http://127.0.0.1:3000/doctors/${id}`)
    .then((response) => response.json())
    .then((data) => data);
});

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchDoctors.pending](state) {
      state.status = 'loading';
    },
    [fetchDoctors.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
    [fetchDoctor.pending](state) {
      state.status = 'loading';
    },
    [fetchDoctor.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default doctorsSlice.reducer