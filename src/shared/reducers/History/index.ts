import { addToFavorites, deleteFromFavorites } from "./actions/HistoryActions";
import favoriteReducer from "./slice/FavoriteSlice";

export { deleteFromFavorites, addToFavorites, favoriteReducer };
