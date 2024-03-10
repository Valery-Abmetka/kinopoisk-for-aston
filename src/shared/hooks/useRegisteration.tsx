import { SubmitHandler } from "react-hook-form";
import { signup } from "../reducers/Authorization";
import { setProfile } from "../reducers/Profile";
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
export function useRegistration() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
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
  return submitHandler;
}
