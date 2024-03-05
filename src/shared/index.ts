import { ButtonAddFavorites } from "./UI/ButtonAddFavorite/ButtonAddFavorits";
import { Form } from "./UI/Form/Form";
import { SearchBar } from "./UI/SearchBar/SearchBar";
import { AuthNavBar } from "./UI/navbar/authNavBar/AuthNavBar";
import { NoAuthNavBar } from "./UI/navbar/noAuthNavBar/NoAuthNavBar";
import {
  useGetInitialMoviesQuery,
  useGetMoviesBySearchQuery,
  useGetMoviesByIdQuery,
} from "./api/kinopoiskApi/kinopoiskApi";
import { useAuthCheck } from "./hooks/useCheckAuth";
import { useDebounce } from "./hooks/useDebounce";
import { useFavorites } from "./hooks/useFavorites";

export {
  ButtonAddFavorites,
  Form,
  AuthNavBar,
  NoAuthNavBar,
  SearchBar,
  useFavorites,
  useAuthCheck,
  useDebounce,
  useGetInitialMoviesQuery,
  useGetMoviesBySearchQuery,
  useGetMoviesByIdQuery,
};
