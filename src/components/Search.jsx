import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../Features/Store/Store";
import { FaSearch } from "react-icons/fa";


function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.lists.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="container">
      <div
        className="mb-3 input-group"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <span
          className="input-group-text"
          id="basic-addon1"
          style={{ color: "#87CEEB" }}
        >
          <FaSearch />
        </span>
        <input
          type="input"
          placeholder="Search List"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}
export default Search;
