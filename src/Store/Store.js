import { configureStore } from "@reduxjs/toolkit";
import UserAuthSlice from "../Reducers/UserSlice";
import logger from "redux-logger";

const Store = configureStore({
  reducer: {
    UserAuth: UserAuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default Store;
