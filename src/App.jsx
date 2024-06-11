import "./App.css";
import Form from "./components/Form";
import Search from "./components/Search";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <h3 className="subtitle is-3" style={{ color: "#87CEEB" }}>
        TODO List
      </h3>
      <hr />
      <div className="row">
        <div className="col">
          <Search />
        </div>
        <div className="col">
          <Form />
        </div>
      </div>
      <hr />
      <List />
    </div>
  );
}

export default App;
