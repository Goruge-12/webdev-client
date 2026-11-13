"use client";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentChildCounter from "./ParentChildCounter";
import ZustandCounter from "./ZustandCounter";
import ZustandTodoList from "./ZustandTodoList";
import ReduxCounter from "./ReduxCounter";
import ReduxTodoList from "./ReduxTodoList";
import ReduxProvider from "./ReduxProvider";
import UrlEncoding from "./UrlEncoding";
export default function Lab4() {
  return <main id="wd-lab4" style={{padding:20}}>
    <h1>Lab 4 - Mario Lopez Perez</h1>
    <ClickEvent />
    <PassingDataOnEvent />
    <PassingFunctions message="Hello from Lab 4" theFunction={message=>alert(message)} theOtherFunction={()=>alert("Mario Lopez Perez")} />
    <CounterBroken />
    <Counter />
    <BooleanStateVariables />
    <StringStateVariables />
    <DateStateVariable />
    <ObjectStateVariable />
    <ArrayStateVariable />
    <ParentChildCounter />
    <ZustandCounter />
    <ZustandTodoList />
    <ReduxProvider><ReduxCounter /><ReduxTodoList /></ReduxProvider>
    <UrlEncoding />
  </main>;
}
