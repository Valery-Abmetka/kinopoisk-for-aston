import { FaStar as StarIcon } from "react-icons/fa";
import styles from "./AddFavorites.module.css";

export function Addfavorites() {
  return (
    <button className={styles.button}>
      <StarIcon className={styles.icon} />
    </button>
  );
}
