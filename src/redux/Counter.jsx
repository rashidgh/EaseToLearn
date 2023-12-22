import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "./Action";

const Counter = () => {
  let dispatch = useDispatch();
  let count = useSelector(state => state.count);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
};

export default Counter;
