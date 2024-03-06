import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/providers/store/store";
import { useCallback } from "react";
import { getEmail, getIsAuthenticated } from "../reducers/Authorization";
import { deleteFromFavorites, addToFavorites } from "../reducers/Favorites";
import { getUser, getDbProfile } from "../reducers/Firestor";
import { useNavigate } from "react-router-dom";

export function useFavorites(movieId: number) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthenticated);
  const email = useSelector(getEmail) as string;
  const { favorites } = useSelector(getUser);
  let isFavorite: boolean = false;
  isFavorite = favorites.includes(movieId);

  const handleFavoriteButtonClick = useCallback(() => {
    if (isAuth) {
      if (isFavorite) {
        dispatch(deleteFromFavorites({ email, movieId }));
        dispatch(getDbProfile(email));
      } else {
        dispatch(addToFavorites({ email, movieId }));
        dispatch(getDbProfile(email));
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
