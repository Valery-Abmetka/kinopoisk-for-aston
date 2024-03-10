import { Form, useLogin } from "../../../shared";
import { useSelector } from "react-redux";
import { UserInfo } from "firebase/auth";
import { getErrorAuth } from "../../../shared/reducers/Authorization";

export interface Response {
  payload: UserInfo;
  type: string;
}

export function Login() {
  const error = useSelector(getErrorAuth);
  const submitHandler = useLogin();

  return <Form error={error} page="Login" onSubmit={submitHandler} />;
}
