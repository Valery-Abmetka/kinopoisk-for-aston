import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { setAuthorized } from "../";
interface User {
  email: string;
  password: string;
}
export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }: User) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return response.user;
    } catch (err) {
      throw new Error();
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
    onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        dispatch(setAuthorized(user.email));
      } else {
        return rejectWithValue("Вы не авторизованы");
      }
    });
  },
);