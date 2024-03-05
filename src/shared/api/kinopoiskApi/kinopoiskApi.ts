import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  transformInitialMovies,
  transformMovieById,
  transformMoviesByQuery,
} from "./transformResponse/transformResponse";

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
        url: "/v2.2/films/collections?type=TOP_POPULAR_ALL",
        params: {
          page: 1,
        },
      }),
      transformResponse: transformInitialMovies,
    }),
    getMoviesById: build.query({
      query: (id) => ({
        url: `/v2.2/films/${id}`,
      }),
      transformResponse: transformMovieById,
    }),
    getMoviesBySearch: build.query({
      query: (query) => ({
        url: `/v2.1/films/search-by-keyword?keyword=${query}&page=1`,
      }),
      transformResponse: transformMoviesByQuery,
    }),
  }),
});

export const {
  useGetInitialMoviesQuery,
  useGetMoviesBySearchQuery,
  useGetMoviesByIdQuery,
} = kinopoiskApi;
