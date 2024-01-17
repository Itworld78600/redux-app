import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <p>Count: {count}</p>
      <button
        style={{
          backgroundColor: "#eeeeee",
          border: "unset",
          borderRadius: '5px',
          padding: "15px 20px",
          margin: '5px',
          color: 'red'
        }}
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        style={{
          backgroundColor: "#eeeeee",
          border: "unset",
          borderRadius: '5px',
          padding: "15px 20px",
          margin: '5px',
          color: 'green'
        }}
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
