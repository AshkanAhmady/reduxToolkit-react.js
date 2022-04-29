import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

// fetch data from DB
export const getAsynkTodos = createAsyncThunk(
  "todos/getAsynkTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const addAsyncTodos = createAsyncThunk(
  "todos/addAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/todos", {
        id: Date.now(),
        title: payload.title,
        completed: false,
      });
      // response.data => just have this new todo that we added
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const TodosSlice = createSlice({
  name: "todos",
  initialState,
  // sync reducers
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
  // async reducers
  extraReducers: {
    // 1: (fulfilled) => success
    [getAsynkTodos.fulfilled]: (state, action) => {
      return { ...state, loading: false, error: null, todos: action.payload };
    },
    // 2: (pending) => fetching data
    [getAsynkTodos.pending]: (state, action) => {
      return { ...state, loading: true, error: null, todos: [] };
    },
    // 3: (rejected) => error
    [getAsynkTodos.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
        todos: [],
      };
    },
    // get new data after add new todo
    [addAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

// actions
export const { addTodo, toggleCompleteTodo, deleteTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
