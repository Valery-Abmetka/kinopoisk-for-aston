import { useDispatch, useSelector } from "react-redux";
import { getDbProfile, getUser } from "../../../shared/reducers/Firestor";
import styles from "./History.module.css";
import { useEffect } from "react";
import { getEmail } from "../../../shared/reducers/Authorization";
import { AppDispatch } from "../../../app/providers/store/store";

export function History() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(getUser);
  const email = useSelector(getEmail);

  useEffect(() => {
    dispatch(getDbProfile(email as string));
  }, [dispatch, email]);

  return (
    <div className={styles.films}>
      {user.history.length ? (
        user.history.map((keyword) => {
          return <div key={keyword}>{keyword}</div>;
        })
      ) : (
        <h1>История пуста</h1>
      )}
    </div>
  );
}
