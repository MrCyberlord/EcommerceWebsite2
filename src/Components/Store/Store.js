import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import AuthSlice from "./AuthSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
