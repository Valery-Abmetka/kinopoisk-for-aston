import { SubmitHandler } from "react-hook-form";

import { Form } from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../app/providers/store/store";
import { UserInfo } from "firebase/auth";
import { getErrorAuth, signup } from "../../../shared/reducers/Authorization";
import { setProfile } from "../../../shared/reducers/Profile";

export interface Response {
  payload: UserInfo;
  type: string;
}
export interface MyForm {
  email: string;
  password: string;
}

export function Signup() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const error = useSelector(getErrorAuth);

  const submitHandler: SubmitHandler<MyForm> = async (user) => {
    try {
      const response = (await dispatch(signup(user))) as Response;
      // чтобы результат сразу был типизирован не
      //смог это обойти по другому но понимаю что как то можно
      if (response.type == "auth/signup/fulfilled") {
        const transformData = {
          email: response.payload.email as string,
          id: response.payload.uid,
        };
        navigate("/");
        await dispatch(setProfile(transformData));
      }
    } catch (err) {
      throw new Error("ошибка запроса");
    }
  };
  return <Form error={error} onSubmit={submitHandler} page="Signup" />;
}
