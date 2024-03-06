import { useSearch } from "../../shared/hooks/useSearch";
import { setResultSearch } from "../../shared/reducers/Search";
import { SearchBar } from "../../shared";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ResultSearch } from "../../shared/UI/SearchBar/SearchBar";
import { addToHistory } from "../../shared/reducers/History/actions/HistoryActions";
import { AppDispatch } from "../../app/providers/store/store";
import { getEmail } from "../../shared/reducers/Authorization";

export function Search() {
  const { query, setQuery, resultSearch } = useSearch();
  const email = useSelector(getEmail) as string;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  function onFormSubmit(data: ResultSearch) {
    const { isError, isLoading, movies, keyword } = data;
    dispatch(setResultSearch({ isError, isLoading, movies }));
    dispatch(addToHistory({ email, keyword }));
    navigate(`/search`);
  }
  return (
    <SearchBar
      query={query}
      setQuery={setQuery}
      resultSearch={resultSearch}
      onFormSubmit={onFormSubmit}
    />
  );
}
