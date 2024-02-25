import { FaStar as StarIcon } from "react-icons/fa";
import styles from "./AddFavorites.module.css";

export function AddFavorites() {
  return (
    <button className={styles.button}>
      <StarIcon className={styles.icon} />
    </button>
  );
}
