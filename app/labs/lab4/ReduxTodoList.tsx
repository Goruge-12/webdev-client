"use client";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo,updateTodo,deleteTodo,type RootState } from "./stores/reduxStore";
export default function ReduxTodoList() {
  const todos=useSelector((state:RootState)=>state.lab4.todos);
  const dispatch=useDispatch();
  const [title,setTitle]=useState("");
  return <section><h3>15. Redux Todo List</h3><input aria-label="New Redux todo" value={title} onChange={e=>setTitle(e.target.value)} />{" "}<button onClick={()=>{if(title.trim()){dispatch(addTodo({id:Date.now(),title:title.trim()}));setTitle("");}}}>Add</button><ul>{todos.map(todo=><li key={todo.id}>{todo.title}{" "}<button onClick={()=>{const updated=prompt("Edit todo",todo.title);if(updated?.trim())dispatch(updateTodo({id:todo.id,title:updated.trim()}));}}>Edit</button>{" "}<button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button></li>)}</ul><hr /></section>;
}
