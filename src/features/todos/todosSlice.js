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
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now,
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleCompleteTodo: (state, action) => {
      const selectedTodo = state.find((item) => item.id === action.payload.id);
      selectedTodo.completed = !selectedTodo.completed;
    },
  },
});

// actions
export const { addTodo, toggleCompleteTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
