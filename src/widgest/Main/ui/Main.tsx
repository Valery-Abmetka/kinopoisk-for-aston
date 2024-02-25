import { Link, useLoaderData } from "react-router-dom";
import styles from "./Main.module.css";
import { Card } from "../../../entities/index";

import { Props as Item } from "../../../entities/index";

export interface Data {
  total: number;
  totalPages: number;
  items: Item[];
}

export function Main() {
  const data = useLoaderData() as Data;

  return (
    <div className={styles.films}>
      {data.items.map((movie) => {
        return (
          <Link to={`/${movie.kinopoiskId}`} key={movie.kinopoiskId}>
            <Card
              nameRu={movie.nameRu}
              ratingKinopoisk={movie.ratingKinopoisk}
              posterUrlPreview={movie.posterUrlPreview}
              genres={movie.genres}
              year={movie.year}
              kinopoiskId={movie.kinopoiskId}
            />
          </Link>
        );
      })}
    </div>
  );
}
