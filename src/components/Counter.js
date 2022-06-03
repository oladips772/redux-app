/** @format */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  addByValue,
} from "../Redux/features/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>redux app</h1>
      <p>{count}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(addByValue(value))}>add by value</button>
    </div>
  );
};

export default Counter;
