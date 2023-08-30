"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type loginState = {
  email: string;
  password: string;
};

const initialState: loginState = {
  email: "",
  password: "",
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    logIn: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
  },
});

export const { logIn } = userLoginSlice.actions;
export default userLoginSlice.reducer;
