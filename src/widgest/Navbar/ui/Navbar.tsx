import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import cn from "classnames";
import { MdLocalMovies as HomeIcon } from "react-icons/md";

export function Navbar() {
  return (
    <nav className={styles.navBar}>
      <NavLink
        className={({ isActive }) =>
          cn(styles.link, {
            [styles.active]: isActive,
          })
        }
        to="/"
      >
        <HomeIcon className={styles.icon} />
      </NavLink>
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
    </nav>
  );
}
//добавить когда зашел Пользователь
//  <NavLink
//     className={({ isActive }) =>
//       cn(
//         styles.link,
//         {
//           [styles.active]: isActive,
//         },
//       )
//     }
//     to="/favorites"
//   >
//     Favorites
//   </NavLink>
//   <NavLink
//     className={({ isActive }) =>
//       cn(
//         styles.link,
//         {
//           [styles.active]: isActive,
//         },
//       )
//     }
//     to="/history"
//   >
//     History
//   </NavLink>
