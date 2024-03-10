import { useDebounce, useGetMoviesBySearchQuery } from "..";

export function useSearch(queryParams: string, page: number) {
  const debounce = useDebounce(queryParams, 500);

  const resultSearch = useGetMoviesBySearchQuery(
    { query: debounce, page },
    {
      selectFromResult: ({ status, data, isError, originalArgs }) => ({
        status: status,
        movies: data?.films,
        isError: isError,
        keyword: data?.keywords,
        page: originalArgs?.page,
      }),
    },
  );

  return resultSearch;
}
