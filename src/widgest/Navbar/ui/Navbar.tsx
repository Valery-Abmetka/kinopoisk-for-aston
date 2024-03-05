import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import cn from "classnames";
import { MdLocalMovies as HomeIcon } from "react-icons/md";

import { useSelector } from "react-redux";
import { AuthNavBar, NoAuthNavBar } from "../../../shared";
import { SearchBar } from "../../../shared/UI/SearchBar/SearchBar";
import { getIsAuthenticated } from "../../../shared/reducers/Authorization";
import { useLogout } from "../../../shared/hooks/useLogout";

export function Navbar() {
  const isAuth = useSelector(getIsAuthenticated);
  const handleLogout = useLogout();

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
      <SearchBar />
      {isAuth ? <AuthNavBar handleLogout={handleLogout} /> : <NoAuthNavBar />}
    </nav>
  );
}
