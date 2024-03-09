import {
  addToFavorites,
  deleteFromFavorites,
} from "./actions/FavoritesActions";
import {
  isFirstLoadingFavorites,
  getErrorFavorites,
  getFavorites,
} from "./selectors/FavoriteSelectors";
import favoriteReducer from "./slice/FavoriteSlice";

export {
  deleteFromFavorites,
  addToFavorites,
  isFirstLoadingFavorites,
  getErrorFavorites,
  getFavorites,
  favoriteReducer,
};
