import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../../shared/hooks/useSearch";
import { SearchItems } from "../../../widgest/SearchItems";
import { useEffect, useState } from "react";
import {
  setResultSearch,
  setStatus,
  setStatusUpdate,
  updateResult,
} from "../../../shared/reducers/Search";
import { AppDispatch } from "../../../app/providers/store/store";
import { useDispatch } from "react-redux";

export function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("q") || "";

  const [currentPage, setCurrentPage] = useState(1);

  const resultSearch = useSearch(queryParams, currentPage);

  const scrollHandler = (): void => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
      setCurrentPage(1);
    };
  }, []);

  useEffect(() => {
    if (
      resultSearch.status === "fulfilled" ||
      resultSearch.status == "rejected"
    ) {
      currentPage !== 1
        ? dispatch(updateResult(resultSearch))
        : dispatch(setResultSearch(resultSearch));
    } else {
      currentPage !== 1
        ? dispatch(setStatusUpdate(resultSearch.status))
        : dispatch(setStatus(resultSearch.status));
    }
  }, [resultSearch, dispatch]);

  return <SearchItems />;
}
