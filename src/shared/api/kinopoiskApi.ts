import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  transformInitialMovies,
  transformMovieById,
  transformMoviesByQuery,
} from "../transformResponse/transformResponse";

export const kinopoiskApi = createApi({
  reducerPath: "kinopoiskApi",
  baseQuery: fetchBaseQuery({
    method: "GET",
    baseUrl: import.meta.env.VITE_KINOPOISK_API,
    headers: {
      "X-API-KEY": import.meta.env.VITE_KINOPOISK_API_KEY,
      "Content-Type": "application/json",
    },
  }),
  endpoints: (build) => ({
    getInitialMovies: build.query({
      query: () => ({
        url: "/collections?type=TOP_POPULAR_ALL",
        params: {
          page: 1,
        },
      }),
      transformResponse: transformInitialMovies,
    }),
    getMoviesById: build.query({
      query: (id) => ({
        url: `/${id}`,
      }),
      transformResponse: transformMovieById,
    }),
    getMoviesBySearch: build.query({
      query: (query) => ({
        url: `/search-by-keyword`,
        params: {
          query: query,
        },
      }),
      // transformResponse: transformMoviesByQuery,
    }),
  }),
});

export const {
  useGetInitialMoviesQuery,
  useGetMoviesBySearchQuery,
  useGetMoviesByIdQuery,
} = kinopoiskApi;
