import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const [inputValue, setInputValue] = useState("");

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(increment(inputValue | 1))}> + </button>
      <button onClick={() => dispatch(decrement(inputValue | 1))}> - </button>
    </div>
  );
};

export default Counter;
