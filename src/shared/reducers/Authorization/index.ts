import { checkAuth, login, logout, signup } from "./actions/AuthActions";
import {
  getIsAuthenticated,
  getEmail,
  getIsLoadingAuth,
  getErrorAuth,
} from "./selectors/AuthSelectors";
import { setAuthorized } from "./slice/Authslice";

import authReducer from "./slice/Authslice";

export {
  signup,
  checkAuth,
  logout,
  login,
  getIsAuthenticated,
  getEmail,
  getIsLoadingAuth,
  getErrorAuth,
  setAuthorized,
  authReducer,
};
