import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/providers/store";
import { useCallback } from "react";
import { addToFavorites, deleteFromFavorites } from "../../features/Favorites";
import { getEmail } from "../../features/Authorization";
import { getDbProfile, getUser } from "../../features/Firestor";
import { isLoadingFavoriteButton } from "../../features/Favorites/selectors/FavoriteSelectors";

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
