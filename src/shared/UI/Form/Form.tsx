import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { signup } from "../../../features/Authorization/actions/AuthActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/providers/store";
import { useNavigate } from "react-router";

interface MyForm {
  email: string;
  password: string;
}

interface Props {
  page: "Signup" | "Login";
}

export function Form({ page }: Props) {
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
        const response = await dispatch(signup(user));
        if (response.type !== "auth/signup/rejected") {
          navigate("/");
        }
      } catch (err) {
        throw new Error("Не действительный email");
      }
    }
    // if (page === "Login") {
    //   // console.log(password);
    //   // dispatch(signin({ email, password }));
    // }
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
        <button className={styles.button} type={"submit"}>
          {page}
        </button>
      </form>
    </div>
  );
}
