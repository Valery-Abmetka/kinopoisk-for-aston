import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getIsAuthenticated } from "../../../shared/reducers/Authorization";

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = (props: Props) => {
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthenticated);
  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  return props.children;
};
