import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { useSelector } from "react-redux";
import { getErrorAuth } from "../../reducers/Authorization";

export interface MyForm {
  email: string;
  password: string;
}

export interface Props {
  page: "Signup" | "Login";
  onSubmit: SubmitHandler<MyForm>;
}

export function Form({ page, onSubmit }: Props) {
  const error = useSelector(getErrorAuth);

  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler: SubmitHandler<MyForm> = async (user) => {
    onSubmit(user);
  };

  return (
    <div>
      <h2 className={styles.title}>{page}</h2>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
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
