import { useDispatch, useSelector } from "react-redux";
import styles from "./History.module.css";
import { getEmail } from "../../../shared/reducers/Authorization";
import { AppDispatch } from "../../../app/providers/store/store";
import { Link } from "react-router-dom";
import { FiTrash2 as DeleteIcon } from "react-icons/fi";
import {
  getHistory,
  getError,
  isFirstLoadingHistory,
  deleteFromHistory,
} from "../../../shared/reducers/History";

export function History() {
  const dispatch = useDispatch<AppDispatch>();
  const history = useSelector(getHistory);
  const error = useSelector(getError);
  const email = useSelector(getEmail) as string;
  const isFirstLoading = useSelector(isFirstLoadingHistory);

  function deleteFromHistoryHandler(keyword: string) {
    dispatch(deleteFromHistory({ email, keyword }));
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
