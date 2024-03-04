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
}

export interface Resp {
  total: number;
  totalPage: number;
  items: Item[];
}

export const transformInitialMovies = (data: Resp) => {
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

// export const transformMoviesByQuery = (res) => {
//   return res.films.map((movie) => {
//     return {
//       id: movie.kinopoiskId,
//       name: movie.nameRu || movie.nameOriginal || movie.nameEn,
//       genres: movie.genres,
//       posterUrlPreview: movie.posterUrlPreview,
//       rating: movie.ratingKinopoisk || movie.ratingImbd,
//       year: movie.year,
//       description: movie.description,
//       webUrl: movie.webUrl,
//     };
//   });
// };
