import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../Slices/taskSlice";

const ToDoList = () => {
  const data = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch(removeTask(id));
  };
  return (
    <div className="task-list">
      {data.map((task, id) => {
        return (
          <li key={id} className="task">
            {task}
            <button onClick={() => deleteTask(id)}>X</button>
          </li>
        );
      })}
    </div>
  );
};

export default ToDoList;
