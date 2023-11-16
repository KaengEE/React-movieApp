import React from "react";

const SearchBox = (props) => {
  const handleChange = (e) => {
    props.setSearchValue(e.target.value);
  };
  return (
    <div className="col col-sm-4">
      <input
        value={props.searchValue}
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="영화검색..."
      />
    </div>
  );
};

export default SearchBox;
