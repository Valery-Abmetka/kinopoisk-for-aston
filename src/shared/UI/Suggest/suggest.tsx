import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./suggest.module.css";
import { ResultSearch } from "../SearchBar/SearchBar";

interface Props {
  resultSearch: ResultSearch;
  isVisible: boolean;
}

export function Suggest({ resultSearch, isVisible }: Props) {
  return resultSearch?.isLoading ? (
    <h2>загрузка</h2>
  ) : resultSearch?.isError ? (
    <h2>Ошибка загрузки саджестов</h2>
  ) : (
    <div
      className={cn(styles.sagest, {
        [styles.active]: !isVisible,
      })}
    >
      {resultSearch?.movies?.map((movie) => {
        return (
          <Link
            className={styles.link}
            to={`/movies/${movie.kinopoiskId}`}
            key={movie.kinopoiskId}
          >
            <div>{movie.nameRu}</div>
          </Link>
        );
      })}
    </div>
  );
}
