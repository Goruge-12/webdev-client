
"use client";

export default function CounterBroken() {
  let count = 7;

  const increment = () => {
    count++;
    console.log(count);
  };

  const decrement = () => {
    count--;
    console.log(count);
  };

  return (
    <div id="wd-counter-broken">
      <h2>Counter Broken</h2>
      <h3>Count: {count}</h3>

      <button onClick={increment} className="btn btn-success me-2">
        Up
      </button>

      <button onClick={decrement} className="btn btn-danger">
        Down
      </button>

      <hr />
    </div>
  );
}
