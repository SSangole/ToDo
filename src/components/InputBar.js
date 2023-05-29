import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Slices/taskSlice";
const Inputbar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleInput = () => {
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <div className="input-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleInput} className="add-btn">
        ADD
      </button>
    </div>
  );
};

export default Inputbar;
