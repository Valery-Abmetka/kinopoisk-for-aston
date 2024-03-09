import { useDebounce, useGetMoviesBySearchQuery } from "..";
import { Item } from "../api/kinopoiskApi/transformResponse/transformResponse";

export function useSearch(queryParams: string, page: number) {
  const debounce = useDebounce(queryParams, 500);

  const resultSearch = useGetMoviesBySearchQuery(
    { query: debounce, page },
    {
      selectFromResult: ({ status, data, isError, originalArgs }) => ({
        status: status,
        movies: data?.films as Item[], //уход от null к обычным значениям
        isError: isError,
        keyword: data?.keywords as string, //уход от null к обычным значениям
        page: originalArgs?.page,
      }),
    },
  );

  return resultSearch;
}
