import styles from "./Favorites.module.css";

import { Props as Item } from "../../../entities/";
import { useSelector } from "react-redux";
import { getUser } from "../../../features/Firestor";

export interface Data {
  total: number;
  totalPages: number;
  items: Item[];
}

export function Favorites() {
  const user = useSelector(getUser);

  return (
    //временное отображение чисел
    <div className={styles.films}>
      {user.favorites.length ? (
        user.favorites.map((movieId) => {
          return <div key={movieId}>{movieId}</div>;
        })
      ) : (
        <h1>Нет избранных</h1>
      )}
    </div>
  );
}
