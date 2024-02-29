import { checkAuth, signup } from "./actions/AuthActions";
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
  getIsAuthenticated,
  getEmail,
  getIsLoadingAuth,
  getErrorAuth,
  setAuthorized,
  authReducer,
};
