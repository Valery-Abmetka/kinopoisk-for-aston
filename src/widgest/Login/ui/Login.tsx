import { Form } from "../../../shared";
import { AppDispatch } from "../../../app/providers/store";
import { useDispatch } from "react-redux";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../../features/Authorization";
import { getDbProfile } from "../../../features/Firestor";
import { MyForm } from "../../../shared/UI/Form/Form";
import { UserInfo } from "firebase/auth";

export interface Response {
  payload: UserInfo;
  type: string;
}

export function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const submitHandler: SubmitHandler<MyForm> = async (user) => {
    try {
      const response = (await dispatch(login(user))) as Response;

      if (response.type == "auth/login/fulfilled") {
        navigate("/");

        const transformData = {
          email: response.payload.email as string,
        };
        await dispatch(getDbProfile(transformData.email));
      }
    } catch (err) {
      throw new Error("ошибка запроса");
    }
  };

  return <Form page="Login" onSubmit={submitHandler} />;
}
