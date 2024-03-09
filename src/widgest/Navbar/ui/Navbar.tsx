import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { MdLocalMovies as HomeIcon } from "react-icons/md";
import { useSelector } from "react-redux";
import { AuthNavBar, NoAuthNavBar } from "../../../shared";
import { getIsAuthenticated } from "../../../shared/reducers/Authorization";
import { useLogout } from "../../../shared/hooks/useLogout";
import { Search } from "../../../features/Search/Search";
import { useContext } from "react";
import { ThemeContext } from "../../../app/providers/context/themeContext";
import { MdWbSunny as ThemeIcon } from "react-icons/md"; //Для удобства чтения
import cn from "classnames";

export function Navbar() {
  const isAuth = useSelector(getIsAuthenticated);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleLogout = useLogout();

  return (
    <nav
      className={cn(styles.navBar, {
        [styles.themeBlack]: theme === "black",
      })}
    >
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
      <ThemeIcon
        className={cn(styles.iconTheme, {
          [styles.iconThemeYellow]: theme === "black",
        })}
        onClick={toggleTheme}
      />
      <Search />
      {isAuth ? <AuthNavBar handleLogout={handleLogout} /> : <NoAuthNavBar />}
    </nav>
  );
}
