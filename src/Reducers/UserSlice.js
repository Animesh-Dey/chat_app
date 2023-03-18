import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    userDetails: {},
    tokens: {},
};

export const UserAuthSlice = createSlice({
    name: 'UserAuth',
    initialState,
    reducers: {
        setTokens: (state, action) => {
            state.tokens = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.userDetails = {};
            state.tokens = {};
            state.isKeepLogin = false;
        }
    },
});

export const {
    setTokens,
    setUserDetails,
    logout
} = UserAuthSlice.actions;

export default UserAuthSlice.reducer;
