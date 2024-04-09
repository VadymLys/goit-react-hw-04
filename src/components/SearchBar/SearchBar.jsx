import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
 

    if (search.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSubmit(search);
    setSearch("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          <FiSearch className={css.icon} />
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
