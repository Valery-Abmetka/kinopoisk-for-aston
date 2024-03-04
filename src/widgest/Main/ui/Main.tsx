import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import { Card } from "../../../entities";
import { Props as Item } from "../../../entities";
import { useGetInitialMoviesQuery } from "../../../shared";

export function Main() {
  const { movies, isError, isLoading } = useGetInitialMoviesQuery(null, {
    selectFromResult: ({ data, isError, isLoading }) => ({
      movies: data as Item[],
      isError: isError,
      isLoading: isLoading,
    }),
  });

  return (
    <div className={styles.films}>
      {isLoading ? (
        <h1>Loading..</h1>
      ) : isError ? (
        <h1>Ошибка получения данных</h1>
      ) : (
        movies?.map((movie) => {
          return (
            <Link to={`/movies/${movie.kinopoiskId}`} key={movie.kinopoiskId}>
              <Card
                kinopoiskId={movie.kinopoiskId}
                nameRu={movie.nameRu}
                ratingKinopoisk={movie.ratingKinopoisk}
                posterUrlPreview={movie.posterUrlPreview}
                genres={movie.genres}
                year={movie.year}
              />
            </Link>
          );
        })
      )}
    </div>
  );
}
