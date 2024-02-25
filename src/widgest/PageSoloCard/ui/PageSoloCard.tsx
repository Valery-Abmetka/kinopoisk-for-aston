import { useLoaderData } from "react-router-dom";
import { Card, Props as Item } from "../../../entities";
import styles from "./PageSoloCard.module.css";
interface Movie extends Item {
  description: string;
  webUrl: string;
}

export function PageSoloCard() {
  const movie = useLoaderData() as Movie;

  return (
    <div className={styles.soloCard}>
      <Card
        nameRu={movie.nameRu}
        genres={movie.genres}
        ratingKinopoisk={movie.ratingKinopoisk}
        posterUrlPreview={movie.posterUrlPreview}
        year={movie.year}
      />
      <div className={styles.fullInfo}>
        <div className={styles.description}>Описание: {movie.description}</div>
        <div className={styles.kinopoiskLink}>
          Смотреть на кинопоиске{" "}
          <a
            className={styles.link}
            href={movie.webUrl}
            target="_blank"
            rel="noreferrer"
          >
            Окрыть
          </a>
        </div>
      </div>
    </div>
  );
}
