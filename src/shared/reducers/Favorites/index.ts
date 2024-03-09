import {
  addToFavorites,
  deleteFromFavorites,
} from "./actions/FavoritesActions";
import {
  selectIsFirstLoadingFavorites,
  selectFavorites,
  selectFavoritesError,
} from "./selectors/FavoriteSelectors";

import favoriteReducer from "./slice/FavoriteSlice";

export {
  deleteFromFavorites,
  addToFavorites,
  selectFavoritesError,
  selectIsFirstLoadingFavorites,
  selectFavorites,
  favoriteReducer,
};
