import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useGetMoviesBySearchQuery } from "../../api/kinopoiskApi";
import { Props as Item, Props } from "../../../entities";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setResultSearch } from "../../../features/Search/SearchSlice/SearchSlice";

interface RespSearch {
  movies: Props[];
  isError: boolean;
  isLoading: boolean;
  keywords: string | undefined;
}

export function SearchBar() {
  const { handleSubmit } = useForm();
  const [query, setQuery] = useState("");
  const debounce = useDebounce(query, 1000);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movies, isError, isLoading, keywords } = useGetMoviesBySearchQuery(
    debounce,
    {
      selectFromResult: ({ data, isError, isLoading }) => ({
        movies: data?.films as Item[],
        isError: isError,
        isLoading: isLoading,
        keywords: data?.keywords,
      }),
    },
  );

  function onFormSubmit(data: RespSearch) {
    dispatch(setResultSearch(data));
    navigate(`/search`);
  }

  return (
    <form
      onSubmit={handleSubmit(() =>
        onFormSubmit({ movies, isError, isLoading, keywords }),
      )}
    >
      <input
        type="text"
        placeholder="search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {
        //понимаю что тяжело читать потом перепишу
        !query ? null : isLoading ? (
          <h2>загрузка</h2>
        ) : isError ? (
          <h2>Ошибка загрузки саджестов</h2>
        ) : (
          movies?.map((movie) => {
            return (
              <Link to={`/movies/${movie.kinopoiskId}`} key={movie.kinopoiskId}>
                <div>{movie.nameRu}</div>
              </Link>
            );
          })
        )
      }
      <button type="submit">Искать</button>
    </form>
  );
}
