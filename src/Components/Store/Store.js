import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./AuthSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    cart: cartReducer,
  },
});

export default store;
