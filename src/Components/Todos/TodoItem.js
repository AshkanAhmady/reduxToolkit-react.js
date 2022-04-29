import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleCompleteAsyncTodo,
  deleteAsyncTodo,
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
            onChange={() =>
              dispatch(
                toggleCompleteAsyncTodo({
                  id: id,
                  title: title,
                  completed: !completed,
                })
              )
            }
            checked={completed}
          ></input>
          {title}
        </span>
        <button
          onClick={() => dispatch(deleteAsyncTodo({ id: id }))}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
