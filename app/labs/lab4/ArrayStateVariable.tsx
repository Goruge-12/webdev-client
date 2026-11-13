"use client";
import { useState } from "react";
export default function ArrayStateVariable() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  return <section><h3>10. Array State Variable</h3><button onClick={() => setNumbers(n => [...n, Math.max(0,...n)+1])}>Add</button><ul>{numbers.map((number,index) => <li key={index}>{number} <button onClick={() => setNumbers(n => n.filter((_,i) => i !== index))}>Delete</button></li>)}</ul><hr /></section>;
}
