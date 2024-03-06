import { useState } from "react";
import { useDebounce, useGetMoviesBySearchQuery } from "..";
import { Item } from "../api/kinopoiskApi/transformResponse/transformResponse";

export function useSearch() {
  const [query, setQuery] = useState("");
  const debounce = useDebounce(query, 500);

  const resultSearch = useGetMoviesBySearchQuery(debounce, {
    selectFromResult: ({ data, isError, isLoading }) => ({
      movies: data?.films as Item[],
      isError: isError,
      isLoading: isLoading,
      keyword: data?.keywords,
    }),
  });

  return { query, setQuery, resultSearch };
}
