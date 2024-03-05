import { useSearch } from "../../shared/hooks/useSearch";
import { setResultSearch } from "../../shared/reducers/Search";
import { SearchBar } from "../../shared";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ResultSearch } from "../../shared/UI/SearchBar/SearchBar";

export function Search() {
  const { query, setQuery, resultSearch } = useSearch();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onFormSubmit(data: ResultSearch) {
    const { isError, isLoading, movies, keywords } = data;
    dispatch(setResultSearch({ isError, isLoading, movies, keywords }));
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
