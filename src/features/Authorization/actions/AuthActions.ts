import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

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
