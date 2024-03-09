import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../../shared/hooks/useSearch";
import { SearchItems } from "../../../widgest/Search";
import { useEffect } from "react";
import { setResultSearch } from "../../../shared/reducers/Search";
import { AppDispatch } from "../../../app/providers/store/store";
import { useDispatch } from "react-redux";

export function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("q") || "";
  const resultSearch = useSearch(queryParams);

  useEffect(() => {
    dispatch(setResultSearch(resultSearch));
  }, [resultSearch, dispatch]);

  return <SearchItems />;
}
