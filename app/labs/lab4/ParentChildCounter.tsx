"use client";
import { useState } from "react";
function Child({count, onUp, onDown}: {count:number; onUp:()=>void; onDown:()=>void}) {
  return <div><p>Child displays count: {count}</p><button onClick={onUp}>Up</button>{" "}<button onClick={onDown}>Down</button></div>;
}
export default function ParentChildCounter() {
  const [count,setCount] = useState(0);
  return <section><h3>11. Parent and Child Counter</h3><Child count={count} onUp={() => setCount(c=>c+1)} onDown={() => setCount(c=>c-1)} /><hr /></section>;
}
