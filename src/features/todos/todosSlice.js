import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: true },
  { id: 3, title: "todo3", completed: true },
  { id: 4, title: "todo4", completed: false },
  { id: 5, title: "todo5", completed: true },
];

export const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

// actions
export const {} = TodosSlice.actions;
export default TodosSlice.reducer;
