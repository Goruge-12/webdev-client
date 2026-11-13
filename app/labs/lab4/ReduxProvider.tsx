"use client";
import { Provider } from "react-redux";
import { reduxStore } from "./stores/reduxStore";
export default function ReduxProvider({children}:{children:React.ReactNode}) {
  return <Provider store={reduxStore}>{children}</Provider>;
}
