import { SubmitHandler } from "react-hook-form";
import { login } from "../reducers/Authorization";
import { getProfile } from "../reducers/Profile";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../app/providers/store/store";
import { UserInfo } from "firebase/auth";

export interface Response {
  payload: UserInfo;
  type: string;
}
export interface MyForm {
  email: string;
  password: string;
}
export function useLogin() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const submitHandler: SubmitHandler<MyForm> = async (user) => {
    try {
      const response = (await dispatch(login(user))) as Response; // чтобы результат сразу был типизирован не
      //смог это обойти по другому но понимаю что как то можно

      if (response.type == "auth/login/fulfilled") {
        navigate("/");
        //либо null либо string
        // если сделать только string то когда приходит ответ с firestora
        //ругается тк там может быть null и везде пришлось приводить
        const transformData = {
          email: response.payload.email as string,
        };
        await dispatch(getProfile(transformData.email));
      }
    } catch (err) {
      throw new Error("ошибка запроса");
    }
  };
  return submitHandler;
}
