"use client";
import { useState } from "react";
export default function DateStateVariable() {
  const [date, setDate] = useState("2026-11-13");
  return <section><h3>8. Date State Variable</h3><input aria-label="Date" type="date" value={date} onChange={e => setDate(e.target.value)} /><p>Selected date: {date}</p><hr /></section>;
}
