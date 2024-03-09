import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./suggest.module.css";

import { useSearch } from "../../hooks/useSearch";

interface Props {
  isVisible: boolean;
  query: string;
}

export function Suggest({ isVisible, query }: Props) {
  const { status, movies, isError: error } = useSearch(query, 1);

  if (status === "uninitialized") {
    return <div>Отправка запроса</div>;
  }

  if (status === "rejected") {
    return <div>Произошла ошибка {error} </div>;
  }

  return (
    <div
      className={cn(styles.sagest, {
        [styles.active]: !isVisible,
      })}
    >
      {status === "pending" ? (
        <div>Загрузка саджестов...</div>
      ) : (
        movies?.map((movie) => {
          return (
            <Link
              className={styles.link}
              to={`/movies/${movie.kinopoiskId}`}
              key={movie.kinopoiskId}
            >
              <div>{movie.nameRu}</div>
            </Link>
          );
        })
      )}
    </div>
  );
}
