import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/providers/store/store";
import { checkAuth } from "../reducers/Authorization";

export const useAuthCheck = (): void => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
};
