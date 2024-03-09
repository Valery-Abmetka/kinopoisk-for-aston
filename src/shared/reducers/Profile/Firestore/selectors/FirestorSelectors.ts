import { RootState } from "../../../../../app/providers/store/store";

export const getUser = (state: RootState) => state.firestore.user;
export const isBdLoading = (state: RootState) => state.firestore.isBdLoading;
export const getBdError = (state: RootState) => state.firestore.error;
