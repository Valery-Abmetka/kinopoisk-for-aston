import {
  addToFavorites,
  deleteFromFavorites,
} from "./actions/FavoritesActions";
import favoriteReducer from "./slice/FavoriteSlice";

export { deleteFromFavorites, addToFavorites, favoriteReducer };
