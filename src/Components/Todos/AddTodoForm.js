import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodos } from "../../features/todos/todosSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addAsyncTodos({ title: value }));
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="form-inline d-flex align-items-center mt-3 mb-3"
    >
      <label className="sr-only m-2">Name</label>
      <input
        type="text"
        className="form-control m-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary m-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
