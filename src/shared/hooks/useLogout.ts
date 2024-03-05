import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/providers/store/store";
import { logout } from "../reducers/Authorization";

export function useLogout() {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
    } catch (err) {
      throw new Error("ошибка запроса");
    }
  };
  return handleLogout;
}
