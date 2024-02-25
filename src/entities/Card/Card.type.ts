export interface Props {
  kinopoiskId?: number;
  nameRu: string;
  genres: Genre[];
  ratingKinopoisk: number;
  year: string;
  posterUrlPreview: string;
}

export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}
