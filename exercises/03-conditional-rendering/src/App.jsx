import React from "react";
import Todo from "./components/Todo.js"
import todos from "./data/todos.js"
// import something
// import another thing

function App() {
  return <div className="App">{
    <Todo todos={todos} showCompleted={false}/>
    }</div>;
}

export default App;
