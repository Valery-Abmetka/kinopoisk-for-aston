import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/providers/store/store";
import { useCallback } from "react";
import { getEmail } from "../reducers/Authorization";
import { deleteFromFavorites, addToFavorites } from "../reducers/Favorites";
import { isLoadingFavoriteButton } from "../reducers/Favorites/selectors/FavoriteSelectors";
import { getUser, getDbProfile } from "../reducers/Firestor";

export function useFavorites(movieId: number) {
  const dispatch = useDispatch<AppDispatch>();

  const email = useSelector(getEmail) as string;
  const { favorites } = useSelector(getUser);
  const isLoadingButton = useSelector(isLoadingFavoriteButton);
  let isFavorite: boolean = false;
  isFavorite = favorites.includes(movieId);

  const handleFavoriteButtonClick = useCallback(() => {
    if (isFavorite) {
      dispatch(deleteFromFavorites({ email, movieId }));
      dispatch(getDbProfile(email));
    } else {
      dispatch(addToFavorites({ email, movieId }));
      dispatch(getDbProfile(email));
    }
  }, [isFavorite, dispatch, email, movieId]);

  return {
    isFavorite,
    isLoadingButton,
    handleFavoriteButtonClick,
  };
}
