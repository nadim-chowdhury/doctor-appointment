"use client";

import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./slices/userLoginSlice";
import userSignupReducer from "./slices/userSignupSlice";

export const store = configureStore({
  reducer: {
    login: userLoginReducer,
    signup: userSignupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice";
// import { userApi } from "../services/userApi";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import userLoginReducer from "./slices/userLoginSlice";
// import userSignupReducer from "./slices/userSignupSlice";

// export const store = configureStore({
//   reducer: {
//     login: userLoginReducer,
//     signup: userSignupReducer,
//     // userReducer,
//     // [userApi.reducerPath]: userApi.reducer,
//   },
//   // devTools: process.env.NODE_ENV !== "production",
//   // middleware: (getDefaultMiddleware) =>
//   //   getDefaultMiddleware({}).concat([userApi.middleware]),
// });

// // setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
