import { createAsyncThunk } from "@reduxjs/toolkit";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

interface UserFavorites {
  email: string;
  movieId: number;
}

export const addToFavorites = createAsyncThunk(
  "favorite/addToFavorites",
  async ({ email, movieId }: UserFavorites, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", email);
      await updateDoc(userRef, {
        favorites: arrayUnion(movieId),
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const deleteFromFavorites = createAsyncThunk(
  "favorite/deleteFromFavorites",
  async ({ email, movieId }: UserFavorites, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", email);
      await updateDoc(userRef, {
        favorites: arrayRemove(movieId),
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
