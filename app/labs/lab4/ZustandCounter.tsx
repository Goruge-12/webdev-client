"use client";
import { useLabStore } from "./stores/zustandStore";
export default function ZustandCounter() {
  const {count,up,down} = useLabStore();
  return <section><h3>12. Zustand Counter</h3><p>Count: {count}</p><button onClick={up}>Up</button>{" "}<button onClick={down}>Down</button><hr /></section>;
}
