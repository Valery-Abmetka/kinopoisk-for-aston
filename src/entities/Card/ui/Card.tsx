import { AddFavorites } from "../../../shared/UI/addFavorite/index";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export interface Props {
  kinopoiskId?: number;
  nameRu: string;
  genres: Genre[];
  ratingKinopoisk: number;
  year: string;
  posterUrlPreview: string;
}

export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}

export function Card({
  nameRu,
  ratingKinopoisk,
  posterUrlPreview,
  genres,
  year,
}: Props) {
  return (
    <Link to={""}>
      <div className={styles.card}>
        <div
          className={styles.head}
          style={{ backgroundImage: `url(${posterUrlPreview})` }}
        >
          <div className={styles.rating}>
            Рейтинг: {ratingKinopoisk || "нет"}
          </div>
          <AddFavorites />
        </div>
        <div className={styles.footer}>
          <div className={styles.title}>{nameRu}</div>
          <div className={styles.description}>Год: {year}</div>
          <div className={styles.description}>
            Жанр:
            {genres.map((el, index) => {
              return <span key={index}>{el.genre}; </span>;
            })}
            {/* знаю что индексы массивов нельзя использовать но они же не будут меняться поэтому решил что можно */}
          </div>
        </div>
      </div>
    </Link>
  );
}
