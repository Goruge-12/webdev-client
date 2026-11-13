"use client";
import { useState } from "react";
import { useLabStore } from "./stores/zustandStore";
export default function ZustandTodoList() {
  const {todos,addTodo,updateTodo,deleteTodo} = useLabStore();
  const [title,setTitle] = useState("");
  return <section><h3>13. Zustand Todo List</h3><input aria-label="New Zustand todo" value={title} onChange={e=>setTitle(e.target.value)} />{" "}<button onClick={()=>{if(title.trim()){addTodo(title.trim());setTitle("");}}}>Add</button><ul>{todos.map(todo=><li key={todo.id}>{todo.title}{" "}<button onClick={()=>{const updated=prompt("Edit todo",todo.title);if(updated?.trim())updateTodo(todo.id,updated.trim());}}>Edit</button>{" "}<button onClick={()=>deleteTodo(todo.id)}>Delete</button></li>)}</ul><hr /></section>;
}
