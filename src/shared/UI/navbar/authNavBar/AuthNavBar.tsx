import { Link, NavLink } from "react-router-dom";
import styles from "./AuthNavBar.module.css";
import cn from "classnames";
import { logout } from "../../../../features/Authorization/actions/AuthActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/providers/store";

export function AuthNavBar() {
  const dispatch = useDispatch<AppDispatch>();

  const hanldeLogout = async () => {
    try {
      await dispatch(logout());
    } catch (err) {
      throw new Error("ошибка запроса");
    }
  };
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
      <Link className={styles.link} onClick={hanldeLogout} to="/">
        Выйти
      </Link>
    </div>
  );
}
