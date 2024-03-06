import { useGetMoviesByIdQuery } from "../../shared";
import { Card, Props as Item } from "../../entities";
import { Link } from "react-router-dom";

interface Movie extends Item {
  description: string;
  webUrl: string;
}

interface Props {
  id: number;
}

export function FavoritesCard({ id }: Props) {
  const { movie, isError, isLoading } = useGetMoviesByIdQuery(id, {
    selectFromResult: ({ data, isError, isLoading }) => ({
      movie: data as Movie,
      isError: isError,
      isLoading: isLoading,
    }),
  });

  if (isError) {
    return <h1>Ошибка</h1>;
  }

  return (
    isLoading && (
      <Link to={`/movies/${movie?.kinopoiskId}`} key={movie?.kinopoiskId}>
        <Card
          kinopoiskId={movie?.kinopoiskId}
          nameRu={movie?.nameRu}
          ratingKinopoisk={movie?.ratingKinopoisk}
          posterUrlPreview={movie?.posterUrlPreview}
          genres={movie?.genres}
          year={movie?.year}
        />
      </Link>
    )
  );
}
