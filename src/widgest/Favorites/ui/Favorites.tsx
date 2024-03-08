import styles from "./Favorites.module.css";

import { Props as Item } from "../../../entities/";
import { FavoritesCard } from "../../../features/favorites/favoritesCard";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../../shared/reducers/Authorization";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  getFavorites,
  isFirstLoadingFavorites,
} from "../../../shared/reducers/Favorites/selectors/FavoriteSelectors";

export interface Data {
  total: number;
  totalPages: number;
  items: Item[];
}

export function Favorites() {
  const favorites = useSelector(getFavorites);
  const isAuth = useSelector(getIsAuthenticated);
  const isFirstLoading = useSelector(isFirstLoadingFavorites);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  if (isFirstLoading) {
    return <h1>Загрузка базы данных</h1>;
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
