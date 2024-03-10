import { useGetMoviesByIdQuery } from "../../shared";
import { Card } from "../../entities";
import { Link } from "react-router-dom";

interface Props {
  id: number;
}

export function FavoritesCard({ id }: Props) {
  const { movie, isError, isLoading } = useGetMoviesByIdQuery(id, {
    selectFromResult: ({ data, isError, isLoading }) => ({
      movie: data,
      isError: isError,
      isLoading: isLoading,
    }),
  });

  if (isError) {
    return <h1>Ошибка</h1>;
  }

  if (typeof movie === "undefined") {
    return;
  }

  return (
    <div>
      {isLoading ? (
        <h2>Загрузка карточки</h2>
      ) : (
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
      )}
    </div>
  );
}
