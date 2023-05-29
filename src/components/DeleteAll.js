import { useDispatch } from "react-redux";
import { clearAll } from "../Slices/taskSlice";

const DeleteAll = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(clearAll());
  };
  return (
    <div className="clear-all">
      <button onClick={deleteAll} className="clear-btn">
        Clear
      </button>
    </div>
  );
};

export default DeleteAll;
