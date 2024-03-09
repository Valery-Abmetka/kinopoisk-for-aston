import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.css";
import { CiSearch as SearchSvg } from "react-icons/ci";
import { Suggest } from "../Suggest/suggest";
import { useState } from "react";
import { getSearchKeyword } from "../../reducers/Search/SearchSelectors/SearchSelector";
import { useSelector } from "react-redux";

export function SearchBar({ onFormSubmit }: Props) {
  const { handleSubmit } = useForm();
  const [isVisibleSuggest, setIsVisibleSuggest] = useState(false);
  const keyword = useSelector(getSearchKeyword);
  const [query, setQuery] = useState(keyword || "");

  return (
    <form
      onSubmit={handleSubmit(() => {
        setIsVisibleSuggest(false);
        onFormSubmit(query);
      })}
      className={styles.form}
    >
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="search movies..."
          value={query}
          onFocus={() => setIsVisibleSuggest(true)}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onBlur={() => setTimeout(() => setIsVisibleSuggest(false), 100)}
        />

        {isVisibleSuggest && (
          <Suggest query={query} isVisible={isVisibleSuggest} />
        )}
      </div>
      <button className={styles.button} type="submit">
        <SearchSvg className={styles.svg} />
      </button>
    </form>
  );
}

interface Props {
  onFormSubmit: (keyword: string) => void;
}
