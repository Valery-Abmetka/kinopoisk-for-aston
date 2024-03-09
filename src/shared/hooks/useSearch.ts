import { useDebounce, useGetMoviesBySearchQuery } from "..";
import { Item } from "../api/kinopoiskApi/transformResponse/transformResponse";

export function useSearch(queryParams: string) {
  const debounce = useDebounce(queryParams, 500);

  const resultSearch = useGetMoviesBySearchQuery(debounce, {
    selectFromResult: ({ status, data, isError }) => ({
      status: status,
      movies: data?.films as Item[],
      isError: isError,
      keyword: data?.keywords as string,
    }),
  });

  return resultSearch;
}
