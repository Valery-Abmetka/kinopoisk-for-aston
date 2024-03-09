import styles from "./Favorites.module.css";

import { Props as Item } from "../../../entities/"; //Для удобства чтения
import { FavoritesCard } from "../../../features/favorites/favoritesCard";
import { useSelector } from "react-redux";
import {
  selectFavorites,
  selectIsFirstLoadingFavorites,
  selectFavoritesError,
} from "../../../shared/reducers/Favorites";

export interface Data {
  total: number;
  totalPages: number;
  items: Item[];
}

export function Favorites() {
  const favorites = useSelector(selectFavorites);

  const isFirstLoading = useSelector(selectIsFirstLoadingFavorites);
  const error = useSelector(selectFavoritesError);

  if (isFirstLoading) {
    return <h1>Загрузка базы данных</h1>;
  }

  if (error) {
    return <h1>Произошла ошибка {error}</h1>;
  }

  return (
    <div className={styles.films}>
      {favorites?.length ? (
        favorites?.map((movieId: number) => {
          return (
            <div key={movieId}>
              <FavoritesCard id={movieId} />
            </div>
          );
        })
      ) : (
        <h1>Нет избранных</h1>
      )}
    </div>
  );
}
