import { useDispatch, useSelector } from "react-redux";
import {
  getDbProfile,
  getUser,
  isBdLoading,
} from "../../../shared/reducers/Firestor";
import styles from "./History.module.css";
import { useEffect } from "react";
import { getEmail } from "../../../shared/reducers/Authorization";
import { AppDispatch } from "../../../app/providers/store/store";
import { Link } from "react-router-dom";
import { deleteFromHistory } from "../../../shared/reducers/History/actions/HistoryActions";
import { FiTrash2 as DeleteIcon } from "react-icons/fi";

export function History() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(getUser);
  const isLoading = useSelector(isBdLoading);
  const email = useSelector(getEmail) as string;

  useEffect(() => {
    dispatch(getDbProfile(email));
    console.log("1");
  }, [dispatch, user.history.length, email]);

  function deleteFromHistoryHandler(keyword: string) {
    dispatch(deleteFromHistory({ email, keyword }));
    dispatch(getDbProfile(email));
  }

  return (
    <div className={styles.history}>
      {user.history.length ? (
        user.history
          .map((keyword, index) => {
            return (
              <div key={keyword} className={styles.block}>
                <Link to={`/search?q=${keyword}`} className={styles.link}>
                  {`${index + 1} : ${keyword}`}
                </Link>

                <DeleteIcon
                  className={styles.icon}
                  onClick={() => deleteFromHistoryHandler(keyword)}
                />
              </div>
            );
          })
          .reverse()
      ) : isLoading ? (
        <h1>Загрузка базы данных</h1>
      ) : (
        <h1>История пуста</h1>
      )}
    </div>
  );
}
