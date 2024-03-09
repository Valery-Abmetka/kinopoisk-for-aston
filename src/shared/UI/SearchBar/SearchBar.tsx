import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.css";
import { CiSearch as SearchSvg } from "react-icons/ci";
import { Suggest } from "../Suggest/suggest";
import { useState } from "react";

import { useSearchParams } from "react-router-dom";

export function SearchBar({ onFormSubmit }: Props) {
  const { handleSubmit } = useForm();
  const [isVisibleSuggest, setIsVisibleSuggest] = useState(false);
  const [prevQery, setPrevQuery] = useState("");

  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("q") || "";

  const [query, setQuery] = useState(queryParams);

  if (queryParams && prevQery !== queryParams) {
    setQuery(queryParams);
    setPrevQuery(queryParams);
  }

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
