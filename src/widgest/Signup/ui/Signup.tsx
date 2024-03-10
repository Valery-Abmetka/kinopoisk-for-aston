import { Form, useRegistration } from "../../../shared";
import { useSelector } from "react-redux";
import { UserInfo } from "firebase/auth";
import { getErrorAuth } from "../../../shared/reducers/Authorization";

export interface Response {
  payload: UserInfo;
  type: string;
}
export interface MyForm {
  email: string;
  password: string;
}

export function Signup() {
  const error = useSelector(getErrorAuth);
  const submitHandler = useRegistration();
  return <Form error={error} onSubmit={submitHandler} page="Signup" />;
}
