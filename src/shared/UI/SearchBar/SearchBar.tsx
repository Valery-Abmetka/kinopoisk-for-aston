import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.css";
import { CiSearch as SearchSvg } from "react-icons/ci";
import { Item } from "../../api/kinopoiskApi/transformResponse/transformResponse";
import { Suggest } from "../Suggest/suggest";
import { useState } from "react";

export function SearchBar({
  query,
  setQuery,
  resultSearch,
  onFormSubmit,
}: Props) {
  const { handleSubmit } = useForm();
  const [isVisibleSuggest, setIsVisibleSuggest] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(() => {
        setIsVisibleSuggest(false);
        onFormSubmit(resultSearch);
      })}
      className={styles.form}
    >
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="search movies..."
          value={query}
          onChange={(e) => {
            setIsVisibleSuggest(true);
            setQuery(e.target.value);
          }}
        />

        {query && (
          <Suggest isVisible={isVisibleSuggest} resultSearch={resultSearch} />
        )}
      </div>
      <button className={styles.button} type="submit">
        <SearchSvg className={styles.svg} />
      </button>
    </form>
  );
}

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  resultSearch: ResultSearch;
  onFormSubmit: (data: ResultSearch) => void;
}
export interface ResultSearch {
  movies: Item[];
  isError: boolean;
  isLoading: boolean;
  keywords: string | undefined;
}
