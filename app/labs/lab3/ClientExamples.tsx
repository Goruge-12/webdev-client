"use client";
import { usePathname } from "next/navigation";
import todos from "./todos.json";
export default function ClientExamples() {
 const pathname = usePathname();
 return <><section><h3>Client Component and Pathname</h3><p>Current pathname: {pathname}</p><p>Pathname length: {pathname.length}</p></section>
 <section><h3>Todo List</h3><ul>{todos.map(todo=><li key={todo.id}><label><input type="checkbox" defaultChecked={todo.completed}/> {todo.title}</label></li>)}</ul></section></>;
}
