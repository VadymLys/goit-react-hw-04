import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!/^[a-zA-Z\s]*$/.test(search.trim())) {
      toast("❌   Please enter valid letters only.");
      return;
    }

    if (search.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSubmit(search);
    setSearch("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
