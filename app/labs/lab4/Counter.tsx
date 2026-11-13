
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(7);
  };

  return (
    <div id="wd-counter">
      <h2>Counter</h2>
      <h3>Count: {count}</h3>

      <button onClick={increment} className="btn btn-success me-2">
        Up
      </button>

      <button onClick={decrement} className="btn btn-danger me-2">
        Down
      </button>

      <button onClick={reset} className="btn btn-warning">
        Reset
      </button>

      <hr />
    </div>
  );
}
