import styles from "./Favorites.module.css";

import { Props as Item } from "../../../entities/";
import { useSelector } from "react-redux";
import { getUser } from "../../../shared/reducers/Firestor";
import { FavoritesCard } from "../../../features/favorites/favoritesCard";

export interface Data {
  total: number;
  totalPages: number;
  items: Item[];
}

export function Favorites() {
  const user = useSelector(getUser);

  return (
    <div className={styles.films}>
      {user.favorites.length ? (
        user.favorites.map((movieId) => {
          return <FavoritesCard key={movieId} id={movieId} />;
        })
      ) : (
        <h1>Нет избранных</h1>
      )}
    </div>
  );
}
