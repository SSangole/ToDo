import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, actions) => {
      state.push(actions.payload);
    },
    removeTask: (state, actions) => {
      state.splice(actions.payload, 1);
    },
    clearAll: (state, actions) => {
      return [];
    },
  },
});

export const { addTask, removeTask, clearAll } = taskSlice.actions;
export default taskSlice.reducer;
