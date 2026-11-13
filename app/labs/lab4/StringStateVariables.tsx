"use client";
import { useState } from "react";
export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("Mario");
  return <section><h3>7. String State Variables</h3><input aria-label="First name" value={firstName} onChange={e => setFirstName(e.target.value)} /><p>First name: {firstName}</p><hr /></section>;
}
