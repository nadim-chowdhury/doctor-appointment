"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type signupState = {
  username: string;
  email: string;
  password: string;
};

const initialState: signupState = {
  username: "",
  email: "",
  password: "",
};

export const userSignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<signupState>) => {
      const { username, email, password } = action.payload;
      state.username = username;
      state.email = email;
      state.password = password;
    },
  },
});

export const { signUp } = userSignupSlice.actions;
export default userSignupSlice.reducer;
