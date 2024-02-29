import { NavLink } from "react-router-dom";
import styles from "./NoAuthNavBar.module.css";
import cn from "classnames";

export function NoAuthNavBar() {
  return (
    <div className={styles.navBarLinks}>
      <NavLink
        className={({ isActive }) =>
          cn(styles.link, {
            [styles.active]: isActive,
          })
        }
        to="/signin"
      >
        Войти
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(styles.link, {
            [styles.active]: isActive,
          })
        }
        to="/signup"
      >
        Зарегистрироваться
      </NavLink>
    </div>
  );
}
