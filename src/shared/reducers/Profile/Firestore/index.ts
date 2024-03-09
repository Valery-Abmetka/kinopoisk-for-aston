import { getDbProfile, setDbProfile } from "./actions/FirestorActions";
import {
  getBdError,
  getUser,
  isBdLoading,
} from "./selectors/FirestorSelectors";
import firestoreReducer from "./slice/FirestorSlice";

export {
  setDbProfile,
  getDbProfile,
  firestoreReducer,
  getUser,
  isBdLoading,
  getBdError,
};
