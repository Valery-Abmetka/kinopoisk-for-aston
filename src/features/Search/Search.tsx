import { useSearch } from "../../shared/hooks/useSearch";
import { setResultSearch } from "../../shared/reducers/Search";
import { SearchBar } from "../../shared";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultSearch } from "../../shared/UI/SearchBar/SearchBar";
import { addToHistory } from "../../shared/reducers/History/actions/HistoryActions";
import { AppDispatch } from "../../app/providers/store/store";
import { getEmail } from "../../shared/reducers/Authorization";
import { useEffect } from "react";

export function Search() {
  const { query, setQuery, resultSearch } = useSearch();
  const email = useSelector(getEmail) as string;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryHistory = searchParams.get("q") || "";

  useEffect(() => {
    setQuery(queryHistory);
  }, [queryHistory, setQuery, searchParams]);

  function onFormSubmit(data: ResultSearch) {
    const { isError, isLoading, movies, keyword } = data;
    dispatch(setResultSearch({ isError, isLoading, movies }));
    dispatch(addToHistory({ email, keyword }));
    navigate(`/search`);
  }

  useEffect(() => {
    if (queryHistory) {
      const { isError, isLoading, movies } = resultSearch;
      dispatch(setResultSearch({ isError, isLoading, movies }));
    }
  }, [queryHistory, resultSearch, dispatch]);

  return (
    <SearchBar
      query={query}
      setQuery={setQuery}
      resultSearch={resultSearch}
      onFormSubmit={onFormSubmit}
    />
  );
}
