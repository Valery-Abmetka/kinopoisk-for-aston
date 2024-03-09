import { getDbProfile, setDbProfile } from "./Firestore";

export type Inputs = {
  email: string;
  id: string;
};

export const setProfile = (user: Inputs) => {
  return setDbProfile(user);
};

export const getProfile = (email: string) => {
  return getDbProfile(email);
};
