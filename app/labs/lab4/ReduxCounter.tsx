"use client";
import { useDispatch,useSelector } from "react-redux";
import { down,up,type RootState } from "./stores/reduxStore";
export default function ReduxCounter() {
  const count=useSelector((state:RootState)=>state.lab4.count);
  const dispatch=useDispatch();
  return <section><h3>14. Redux Counter</h3><p>Count: {count}</p><button onClick={()=>dispatch(up())}>Up</button>{" "}<button onClick={()=>dispatch(down())}>Down</button><hr /></section>;
}
