import styles from "./Favorites.module.css";

import { Props as Item } from "../../../entities/";
import { useDispatch, useSelector } from "react-redux";
import { getDbProfile, getUser } from "../../../shared/reducers/Firestor";
import { FavoritesCard } from "../../../features/favorites/favoritesCard";
import { useEffect } from "react";
import { getEmail } from "../../../shared/reducers/Authorization";
import { AppDispatch } from "../../../app/providers/store/store";

export interface Data {
  total: number;
  totalPages: number;
  items: Item[];
}

export function Favorites() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(getUser);
  const email = useSelector(getEmail);

  useEffect(() => {
    dispatch(getDbProfile(email as string));
  }, [dispatch, email]);

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
