import { Genre } from "../../entities/Card/ui/Card";

export interface Item {
  kinopoiskId: number;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  countries: string[] | null;
  genres: Genre[] | null;
  ratingKinopoisk: number | null;
  ratingImbd: number | null;
  year: string | null;
  type: string | null;
  posterUrl: string | null;
  posterUrlPreview: string | null;
  description: string | null;
  webUrl: string | null;
  filmId?: number;
}

export interface RespInitial {
  total: number;
  totalPage: number;
  items: Item[];
}
export interface RespSearch {
  keyword: string;
  films: Item[];
}

export const transformInitialMovies = (data: RespInitial) => {
  return data?.items.map((movie: Item) => ({
    kinopoiskId: movie.kinopoiskId,
    nameRu: movie.nameRu || movie.nameOriginal || movie.nameEn,
    genres: movie.genres,
    posterUrlPreview: movie.posterUrlPreview,
    ratingKinopoisk: movie.ratingKinopoisk || movie.ratingImbd,
    year: movie.year,
  }));
};

export const transformMovieById = (movie: Item) => {
  return {
    kinopoiskId: movie.kinopoiskId,
    nameRu: movie.nameRu || movie.nameOriginal || movie.nameEn,
    genres: movie.genres,
    posterUrlPreview: movie.posterUrlPreview,
    ratingKinopoisk: movie.ratingKinopoisk || movie.ratingImbd,
    year: movie.year,
    description: movie.description,
    webUrl: movie.webUrl,
  };
};

export const transformMoviesByQuery = (res: RespSearch) => {
  return {
    films: res?.films?.map((movie: Item) => {
      return {
        kinopoiskId: movie.kinopoiskId || movie.filmId,
        nameRu: movie.nameRu || movie.nameOriginal || movie.nameEn,
        genres: movie.genres,
        posterUrlPreview: movie.posterUrlPreview,
        ratingKinopoisk: movie.ratingKinopoisk || movie.ratingImbd,
        year: movie.year,
        description: movie.description,
        webUrl: movie.webUrl,
      };
    }),
    keywords: res.keyword,
  };
};
