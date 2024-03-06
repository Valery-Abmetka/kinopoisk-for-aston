import styles from "./Favorites.module.css";

import { Props as Item } from "../../../entities/";
import { FavoritesCard } from "../../../features/favorites/favoritesCard";
import { useSelector } from "react-redux";
import { getUser, isBdLoading } from "../../../shared/reducers/Firestor";
import { getIsAuthenticated } from "../../../shared/reducers/Authorization";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export interface Data {
  total: number;
  totalPages: number;
  items: Item[];
}

export function Favorites() {
  const user = useSelector(getUser);
  const isLoading = useSelector(isBdLoading);

  const isAuth = useSelector(getIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  return isLoading ? (
    <h1>Загрузка базы данных</h1>
  ) : (
    <div className={styles.films}>
      {user.favorites?.length ? (
        user.favorites?.map((movieId: number) => {
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
