import { Link } from "react-router-dom";
import { Card } from "../../../entities";
import { useSelector } from "react-redux";
import {
  getSearchIsError,
  getSearchIsLoading,
  getSearchMovies,
} from "../../../features/Search/SearchSelectors/SearchSelector";

export function SearchItems() {
  const searchMovies = useSelector(getSearchMovies);
  const isErrorSearchMovies = useSelector(getSearchIsError);
  const isLoadingSearchMovies = useSelector(getSearchIsLoading);
  if (!searchMovies.length) {
    return <h1>ничего не найдено</h1>;
  }
  return (
    <div>
      {isErrorSearchMovies ? (
        <h1>Loading..</h1>
      ) : isLoadingSearchMovies ? (
        <h1>Ошибка получения данных</h1>
      ) : (
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
      )}
    </div>
  );
}
