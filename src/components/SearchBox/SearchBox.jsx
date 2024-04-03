const SearchBox = ({ searchValue, onChange }) => {
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
