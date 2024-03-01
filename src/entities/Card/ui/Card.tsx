import { ButtonAddFavorites } from "../../../shared";
import styles from "./Card.module.css";

export interface Props {
  kinopoiskId: string;
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
  kinopoiskId,
}: Props) {
  return (
    <div className={styles.card}>
      <div
        className={styles.head}
        style={{ backgroundImage: `url(${posterUrlPreview})` }}
      >
        <div className={styles.rating}>Рейтинг: {ratingKinopoisk || "нет"}</div>
        <ButtonAddFavorites movieId={+kinopoiskId} />
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>{nameRu}</div>
        <div className={styles.description}>Год: {year}</div>
        <div className={styles.description}>
          Жанр:
          {!!genres?.length &&
            genres.map((el, index) => {
              return <span key={index}>{el.genre}; </span>;
            })}
          {/* знаю что индексы массивов нельзя использовать но они же не будут меняться поэтому решил что можно */}
        </div>
      </div>
    </div>
  );
}
