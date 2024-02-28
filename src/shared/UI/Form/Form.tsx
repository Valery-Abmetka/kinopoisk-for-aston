import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.css";

interface MyForm {
  email: string;
  password: string;
}

interface Props {
  page: "Signup" | "Login";
}

export function Form({ page }: Props) {
  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<MyForm> = (data) => {
    const { email, password } = data;
    if (page === "Signup") {
      console.log(email);

      // dispatch(signup({ email, password }));
    }
    if (page === "Login") {
      console.log(password);
      // dispatch(signin({ email, password }));
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
        <button className={styles.button} type={"submit"}>
          {page}
        </button>
      </form>
    </div>
  );
}
