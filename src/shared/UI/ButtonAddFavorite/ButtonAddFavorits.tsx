import { FaStar as StarIcon } from "react-icons/fa";
import styles from "./ButtonAddFavorites.module.css";
import { memo } from "react";

import cn from "classnames";

interface Props {
  isFavorite: boolean;
  handleFavoriteButtonClick: () => void;
}

export const ButtonAddFavorites = memo(function ButtonAddFavorites({
  isFavorite,
  handleFavoriteButtonClick,
}: Props) {
  return (
    <button
      className={cn(styles.button, {
        [styles.active]: isFavorite,
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
