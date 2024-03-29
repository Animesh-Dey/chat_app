import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const UserAuthSlice = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      localStorage.setItem("ISAUTHENTICATED", action.payload);
    },
    logout: (state, action) => {
      state.isAuthenticated = action.payload;
      localStorage.removeItem("ISAUTHENTICATED");
    },
  },
});

export const { setIsAuthenticated, logout } = UserAuthSlice.actions;

export default UserAuthSlice.reducer;
