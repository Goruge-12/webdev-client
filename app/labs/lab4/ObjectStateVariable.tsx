"use client";
import { useState } from "react";
export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24, city: "Boston" });
  return <section><h3>9. Object State Variable</h3><label>Name <input value={person.name} onChange={e => setPerson({...person, name:e.target.value})} /></label>{" "}<label>Age <input type="number" value={person.age} onChange={e => setPerson({...person, age:Number(e.target.value)})} /></label>{" "}<label>City <input value={person.city} onChange={e => setPerson({...person, city:e.target.value})} /></label><pre>{JSON.stringify(person, null, 2)}</pre><hr /></section>;
}
