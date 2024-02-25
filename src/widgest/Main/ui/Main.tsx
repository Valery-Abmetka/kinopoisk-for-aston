import { useLoaderData } from "react-router-dom";
import styles from "./Main.module.css";
import { Card } from "../../../entities/index";
import { Data } from "./Main.types";

export function Main() {
  const data = useLoaderData() as Data;

  return (
    <div className={styles.films}>
      {data.items.map((movie) => {
        return (
          <Card
            key={movie.kinopoiskId}
            nameRu={movie.nameRu}
            ratingKinopoisk={movie.ratingKinopoisk}
            posterUrlPreview={movie.posterUrlPreview}
            genres={movie.genres}
            year={movie.year}
          />
        );
      })}
    </div>
  );
}
