import { useNavigate } from "react-router-dom";
import { SearchBar } from "../../shared";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/providers/store/store";
import { addToHistory } from "../../shared/reducers/History";
import { getEmail } from "../../shared/reducers/Authorization";

export function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector(getEmail) as string;

  function onFormSubmit(keyword: string) {
    dispatch(addToHistory({ email, keyword }));
    navigate(`/search?q=${keyword}`);
  }

  return <SearchBar onFormSubmit={onFormSubmit} />;
}
