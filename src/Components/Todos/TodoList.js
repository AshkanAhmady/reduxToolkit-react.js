import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsynkTodos } from "../../features/todos/todosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();

  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAsynkTodos());
  }, []);

  if (loading) return <p>loading ...</p>;

  if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
