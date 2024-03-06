import { createAsyncThunk } from "@reduxjs/toolkit";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

interface UserHistory {
  email: string;
  keyword: string;
}

export const addToHistory = createAsyncThunk(
  "history/addToHistory",
  async ({ email, keyword }: UserHistory, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", email);
      await updateDoc(userRef, {
        history: arrayUnion(keyword),
      });
      return keyword;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const deleteFromHistory = createAsyncThunk(
  "history/deleteFromHistory",
  async ({ email, keyword }: UserHistory, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", email);
      await updateDoc(userRef, {
        history: arrayRemove(keyword),
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
