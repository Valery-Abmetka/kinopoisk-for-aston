import { FaStar as StarIcon } from "react-icons/fa";
import styles from "./ButtonAddFavorites.module.css";
import { memo } from "react";

import cn from "classnames";
import { useFavorites } from "../../";

interface Props {
  movieId: number;
}

export const ButtonAddFavorites = memo(function ButtonAddFavorites({
  movieId,
}: Props) {
  const { isFavorite, handleFavoriteButtonClick } = useFavorites(movieId);

  return (
    <button
      className={cn(styles.button, {
        [styles.active]: isFavorite,
        [styles.isLoading]: false,
      })}
      onClick={(event) => {
        event.preventDefault();
        handleFavoriteButtonClick();
      }}
    >
      <StarIcon
        className={cn(styles.icon, {
          [styles.iconActive]: isFavorite,
        })}
      />
    </button>
  );
});
