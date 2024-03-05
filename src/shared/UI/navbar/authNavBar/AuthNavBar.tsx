import { Link, NavLink } from "react-router-dom";
import styles from "./AuthNavBar.module.css";
import cn from "classnames";

interface Props {
  handleLogout: () => void;
}
export function AuthNavBar({ handleLogout }: Props) {
  return (
    <div className={styles.navBarLinks}>
      <NavLink
        className={({ isActive }) =>
          cn(styles.link, {
            [styles.active]: isActive,
          })
        }
        to="/favorites"
      >
        Избранное
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(styles.link, {
            [styles.active]: isActive,
          })
        }
        to="/history"
      >
        История
      </NavLink>
      <Link className={styles.link} onClick={() => handleLogout()} to="/">
        Выйти
      </Link>
    </div>
  );
}
