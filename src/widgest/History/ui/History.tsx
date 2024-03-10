import { useDispatch, useSelector } from "react-redux";
import styles from "./History.module.css";
import { getEmail } from "../../../shared/reducers/Authorization";
import { AppDispatch } from "../../../app/providers/store/store";
import { Link } from "react-router-dom";
import { FiTrash2 as DeleteIcon } from "react-icons/fi"; //Для удобства чтения
import {
  deleteFromHistory,
  selectHistory,
  selectIsFirstLoadingHistory,
  selectIsHistoryError,
} from "../../../shared/reducers/History";

export function History() {
  const dispatch = useDispatch<AppDispatch>();
  const history = useSelector(selectHistory);
  const error = useSelector(selectIsHistoryError);
  const email = useSelector(getEmail);
  const isFirstLoading = useSelector(selectIsFirstLoadingHistory);

  function deleteFromHistoryHandler(keyword: string) {
    if (typeof email === "string") {
      dispatch(deleteFromHistory({ email, keyword }));
    }
  }

  if (isFirstLoading) {
    return <h1>Загрузка базы данных</h1>;
  }
  if (error) {
    return <h1>Произошла ошибка удаления {error}</h1>;
  }

  return (
    <div className={styles.history}>
      {history?.length ? (
        history
          ?.map((keyword, index) => {
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
      ) : (
        <h1>История пуста</h1>
      )}
    </div>
  );
}
