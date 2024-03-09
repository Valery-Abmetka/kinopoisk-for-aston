import { Form } from "../../../shared";
import { AppDispatch } from "../../../app/providers/store/store";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { UserInfo } from "firebase/auth";
import { getErrorAuth, login } from "../../../shared/reducers/Authorization";
import { getProfile } from "../../../shared/reducers/Profile";
import { MyForm } from "../../../shared/UI/Form/Form";

export interface Response {
  payload: UserInfo;
  type: string;
}

export function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const error = useSelector(getErrorAuth);

  const submitHandler: SubmitHandler<MyForm> = async (user) => {
    try {
      const response = (await dispatch(login(user))) as Response;

      if (response.type == "auth/login/fulfilled") {
        navigate("/");

        const transformData = {
          email: response.payload.email as string,
        };
        await dispatch(getProfile(transformData.email));
      }
    } catch (err) {
      throw new Error("ошибка запроса");
    }
  };

  return <Form error={error} page="Login" onSubmit={submitHandler} />;
}
