import { Card, Props as Item } from "../../../entities";
import { useGetMoviesByIdQuery } from "../../../shared";
import styles from "./SoloCard.module.css";
import { useParams } from "react-router-dom";
interface Movie extends Item {
  description: string;
  webUrl: string;
}

export function SoloCard() {
  const { id } = useParams();

  const { movie, isError, isLoading } = useGetMoviesByIdQuery(id, {
    selectFromResult: ({ data, isError, isLoading }) => ({
      movie: data as Movie,
      isError: isError,
      isLoading: isLoading,
    }),
  });

  return isLoading ? (
    <h1>Loading..</h1>
  ) : isError ? (
    <h1>Ошибка получения данных</h1>
  ) : (
    <div className={styles.soloCard}>
      <Card
        nameRu={movie?.nameRu}
        genres={movie?.genres}
        ratingKinopoisk={movie?.ratingKinopoisk}
        posterUrlPreview={movie?.posterUrlPreview}
        year={movie?.year}
        kinopoiskId={movie?.kinopoiskId}
      />
      <div className={styles.fullInfo}>
        <div className={styles.description}>Описание: {movie?.description}</div>
        <div className={styles.kinopoiskLink}>
          Смотреть на кинопоиске{" "}
          <a
            className={styles.link}
            href={movie?.webUrl}
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
