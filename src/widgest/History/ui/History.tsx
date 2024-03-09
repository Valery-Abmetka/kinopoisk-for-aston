import { useDispatch, useSelector } from "react-redux";
import styles from "./History.module.css";
import { useEffect } from "react";
import {
  getEmail,
  getIsAuthenticated,
} from "../../../shared/reducers/Authorization";
import { AppDispatch } from "../../../app/providers/store/store";
import { Link, useNavigate } from "react-router-dom";
import { deleteFromHistory } from "../../../shared/reducers/History/actions/HistoryActions";
import { FiTrash2 as DeleteIcon } from "react-icons/fi";
import {
  getError,
  getHistory,
  isFirstLoadingHistory,
} from "../../../shared/reducers/History/selectors/HistorySelectors";

export function History() {
  const dispatch = useDispatch<AppDispatch>();
  const history = useSelector(getHistory);
  const error = useSelector(getError);
  const email = useSelector(getEmail) as string;
  const isAuth = useSelector(getIsAuthenticated);
  const navigate = useNavigate();
  const isFirstLoading = useSelector(isFirstLoadingHistory);

  function deleteFromHistoryHandler(keyword: string) {
    dispatch(deleteFromHistory({ email, keyword }));
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

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
