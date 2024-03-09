import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsAuthenticated } from "../../../shared/reducers/Authorization";
import { Favorites } from "../../../widgest/Favorites";

export function FavoritesPage() {
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthenticated);
  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);
  return <Favorites />;
}
