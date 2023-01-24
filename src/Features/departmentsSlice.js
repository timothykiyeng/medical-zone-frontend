import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDepartments = createAsyncThunk("departments/fetchDepartments", () => {
  return fetch("http://127.0.0.1:3000/departments")
    .then((response) => response.json())
    .then((data) => data);
});
export const fetchDepartment = createAsyncThunk("departments/fetchDepartment", (id) => {
  return fetch(`http://127.0.0.1:3000/departments/${id}`)
    .then((response) => response.json())
    .then((data) => data);
});

const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchDepartments.pending](state) {
      state.status = 'loading';
    },
    [fetchDepartments.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
    [fetchDepartment.pending](state) {
      state.status = 'loading';
    },
    [fetchDepartment.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default departmentsSlice.reducer