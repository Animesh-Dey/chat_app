import { configureStore } from '@reduxjs/toolkit';
import UserAuthSlice from '../Reducers/UserSlice';

const Store = configureStore({
    reducer: {
        UserAuth: UserAuthSlice,
    }
})

export default Store