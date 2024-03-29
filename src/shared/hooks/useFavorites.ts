import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/providers/store/store";
import { useCallback } from "react";
import { getEmail, getIsAuthenticated } from "../reducers/Authorization";
import {
  deleteFromFavorites,
  addToFavorites,
  selectFavorites,
} from "../reducers/Favorites";
import { useNavigate } from "react-router-dom";

export function useFavorites(movieId: number) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthenticated);
  const email = useSelector(getEmail);
  const favorites = useSelector(selectFavorites);
  let isFavorite: boolean = false;
  isFavorite = favorites.includes(movieId);

  const handleFavoriteButtonClick = useCallback(() => {
    if (isAuth && typeof email === "string") {
      if (isFavorite) {
        dispatch(deleteFromFavorites({ email, movieId }));
      } else {
        dispatch(addToFavorites({ email, movieId }));
      }
    } else {
      navigate("/signin");
    }
  }, [isFavorite, dispatch, email, movieId, isAuth, navigate]);

  return {
    isFavorite,
    handleFavoriteButtonClick,
  };
}
