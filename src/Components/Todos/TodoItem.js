import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleCompleteTodo,
  deleteTodo,
} from "../../features/todos/todosSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            onChange={() => dispatch(toggleCompleteTodo({ id: id }))}
            checked={completed}
          ></input>
          {title}
        </span>
        <button
          onClick={() => dispatch(deleteTodo({ id: id }))}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
