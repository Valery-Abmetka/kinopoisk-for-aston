import { Link } from "react-router-dom";
import { Card } from "../../../entities";
import { useSelector } from "react-redux";
import styles from "./SearchItems.module.css";
import {
  getSearchMovies,
  getSearchStatus,
  getSearchError,
} from "../../../shared/reducers/Search";

export function SearchItems() {
  const searchMovies = useSelector(getSearchMovies);
  const status = useSelector(getSearchStatus);
  const error = useSelector(getSearchError);

  if (status === "uninitialized") {
    return <div>Отправка запроса</div>;
  }
  if (status === "pending") {
    return <div>Получение ответа. Загрузка...</div>;
  }
  if (status === "rejected") {
    return <div>Произошла ошибка {error} </div>;
  }

  return (
    <div className={styles.films}>
      {searchMovies.length > 0 ? (
        searchMovies?.map((movie) => {
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
      ) : (
        <div>Ничего не найдено</div>
      )}
    </div>
  );
}
