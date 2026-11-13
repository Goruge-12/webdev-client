import { create } from "zustand";
export type Todo = { id: number; title: string };
type LabStore = { count: number; up: () => void; down: () => void; todos: Todo[]; addTodo: (title: string) => void; updateTodo: (id: number, title: string) => void; deleteTodo: (id: number) => void };
export const useLabStore = create<LabStore>((set) => ({
  count: 0,
  up: () => set(s => ({ count: s.count + 1 })),
  down: () => set(s => ({ count: s.count - 1 })),
  todos: [{id:1,title:"Read chapter 4"},{id:2,title:"Finish Lab 4"},{id:3,title:"Test the app"}],
  addTodo: title => set(s => ({todos:[...s.todos,{id:Date.now(),title}]})),
  updateTodo: (id,title) => set(s => ({todos:s.todos.map(t => t.id === id ? {...t,title} : t)})),
  deleteTodo: id => set(s => ({todos:s.todos.filter(t => t.id !== id)})),
}));
