import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    is_auth: false,
  },
  reducers: {
    setAuth:(state, action) => {
      state.is_auth = true;
    }
  }
});

export const { setAuth } = loginSlice.actions;

export default loginSlice.reducer;