import { useDebounce, useGetMoviesBySearchQuery } from "..";
import { Item } from "../api/kinopoiskApi/transformResponse/transformResponse";

export function useSearch(queryParams: string, page: number) {
  const debounce = useDebounce(queryParams, 500);

  const resultSearch = useGetMoviesBySearchQuery(
    { query: debounce, page },
    {
      selectFromResult: ({ status, data, isError, originalArgs }) => ({
        status: status,
        movies: data?.films as Item[],
        isError: isError,
        keyword: data?.keywords as string,
        page: originalArgs?.page,
      }),
    },
  );

  return resultSearch;
}
