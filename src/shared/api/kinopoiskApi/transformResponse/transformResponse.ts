import { Genre } from "../../../../entities/Card/ui/Card";

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

interface ReturnValue {
  kinopoiskId: number;
  nameRu: string;
  genres: Genre[];
  posterUrlPreview: string;
  ratingKinopoisk: number | null;
  year: string;
  description?: string;
  webUrl?: string;
}
interface queryReturnValue {
  films: ReturnValue[];
  keywords: string;
}

export const transformInitialMovies = (data: RespInitial): ReturnValue[] => {
  return data?.items.map((movie) => ({
    kinopoiskId: movie.kinopoiskId,
    nameRu:
      movie.nameRu || movie.nameOriginal || movie.nameEn || "Нет названия",
    genres: movie.genres || [],
    posterUrlPreview: movie.posterUrlPreview || "Нет фото",
    ratingKinopoisk: movie.ratingKinopoisk || movie.ratingImbd,
    year: movie.year || "Не известно",
  }));
};

export const transformMovieById = (movie: Item): ReturnValue => {
  return {
    kinopoiskId: movie.kinopoiskId,
    nameRu:
      movie.nameRu || movie.nameOriginal || movie.nameEn || "Нет названия",
    genres: movie.genres || [],
    posterUrlPreview: movie.posterUrlPreview || "Нет фото",
    ratingKinopoisk: movie.ratingKinopoisk || movie.ratingImbd,
    year: movie.year || "Не известно",
    description: movie.description || "Нет описания",
    webUrl: movie.webUrl || "",
  };
};

export const transformMoviesByQuery = (res: RespSearch): queryReturnValue => {
  return {
    films: res?.films?.map((movie: Item) => {
      return {
        kinopoiskId: movie.kinopoiskId || (movie.filmId as number), // не смог привести тк иногда апи отдает undefiend а ингода число
        nameRu:
          movie.nameRu || movie.nameOriginal || movie.nameEn || "Нет названия",
        genres: movie.genres || [],
        posterUrlPreview: movie.posterUrlPreview || "Нет фото",
        ratingKinopoisk: movie.ratingKinopoisk || movie.ratingImbd,
        year: movie.year || "Не известно",
        description: movie.description || "Нет описания",
        webUrl: movie.webUrl || "",
      };
    }),
    keywords: res.keyword,
  };
};
