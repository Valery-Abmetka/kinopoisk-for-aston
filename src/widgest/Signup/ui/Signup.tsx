import { SubmitHandler } from "react-hook-form";
import { signup } from "../../../features/Authorization";
import { setDbProfile } from "../../../features/Firestor";
import { Form } from "../../../shared";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../app/providers/store";
import { UserInfo } from "firebase/auth";

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

  const submitHandler: SubmitHandler<MyForm> = async (user) => {
    try {
      const response = (await dispatch(signup(user))) as Response;
      if (response.type == "auth/signup/fulfilled") {
        const transformData = {
          email: response.payload.email as string,
          id: response.payload.uid,
        };
        navigate("/");
        await dispatch(setDbProfile(transformData));
      }
    } catch (err) {
      throw new Error("ошибка запроса");
    }
  };
  return <Form onSubmit={submitHandler} page="Signup" />;
}
