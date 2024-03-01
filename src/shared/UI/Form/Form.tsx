import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/providers/store";
import { useNavigate } from "react-router";
import { getErrorAuth, login, signup } from "../../../features/Authorization";
import { UserInfo } from "firebase/auth";
import { getDbProfile, setDbProfile } from "../../../features/Firestor";

interface MyForm {
  email: string;
  password: string;
}

interface Props {
  page: "Signup" | "Login";
}

interface Response {
  payload: UserInfo;
  type: string;
}

export function Form({ page }: Props) {
  const error = useSelector(getErrorAuth);

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<MyForm> = async (user) => {
    if (page === "Signup") {
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
    } else if (page === "Login") {
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
    }
  };

  return (
    <div>
      <h2 className={styles.title}>{page}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <label htmlFor="email" className={styles.label}>
            Your email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className={styles.input}
            placeholder="name@mail.com"
          />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>
            Your password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className={styles.input}
          />
        </div>
        {error && <div className={styles.err}>{error}</div>}
        <button className={styles.button} type={"submit"}>
          {page}
        </button>
      </form>
    </div>
  );
}
