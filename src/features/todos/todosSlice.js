import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: true },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: true },
  ],
};

export const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleCompleteTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (item) => item.id === action.payload.id
      );
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodo: (state, action) => {
      const filteredTodos = state.todos.filter(
        (item) => item.id !== action.payload.id
      );

      state.todos = filteredTodos;
    },
  },
});

// actions
export const { addTodo, toggleCompleteTodo, deleteTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
