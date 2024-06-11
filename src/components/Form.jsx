import { useDispatch, useSelector } from "react-redux";
import { changeList, addList } from "../Features/Store/Store";

function Form() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.form.list);

  const handleListChange = (event) => {
    dispatch(changeList(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addList({ list }));
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div
          className="mb-3 input-group"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            type="text"
            placeholder="Add New List"
            className="input is-expanded"
            value={list}
            onChange={handleListChange}
            required
          />
          <button
            type="submit"
            className="btn btn-info"
            style={{ color: "white" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
