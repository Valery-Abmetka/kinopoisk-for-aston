import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { setAuthorized } from "../";

import { auth } from "../../../../firebase";
import { setLoading } from "../slice/Authslice";
import { getProfile } from "../../Profile";
interface User {
  email: string;
  password: string;
}
export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }: User, { rejectWithValue }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return response.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: User, { rejectWithValue }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
  return null;
});

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { dispatch, rejectWithValue }) => {
    onAuthStateChanged(auth, async (user) => {
      if (user && user.email) {
        dispatch(setAuthorized(user.email));
        dispatch(getProfile(user.email));
      } else {
        dispatch(setLoading());
        return rejectWithValue("Authentication check error");
      }
    });
  },
);
