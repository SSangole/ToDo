import DeleteAll from "./components/DeleteAll";
import Inputbar from "./components/InputBar";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="main-container">
      <Inputbar />
      <ToDoList />
      <DeleteAll />
    </div>
  );
}

export default App;
