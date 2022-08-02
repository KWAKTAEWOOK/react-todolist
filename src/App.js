import React, { useState,useRef } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([]);
  const nextId= useRef(1);
  const onInsert = (text) => {
    const todo = {//할일을 불러와야한다.
      id: nextId.current,//id순서대로 필요하고
      text, //어떤일을할건가 문자열로 입력받아야한다
      checked: false,

    };
    setTodos((todos)=> todos.concat(todo));//(추가로직)todos는 빈배열이고 온인써트를입력받으면 todo에 값을 받아와서 todos에 담아준다.
    nextId.current++;//current는 현재값을 받아옴++는1씩증가
  };
  const onToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
  
      )
    );
  };
  return (
  <TodoTemplate> 
    <TodoInsert onInsert={onInsert} />  
    <TodoList todos={todos} onToggle={onToggle} /> 
  </TodoTemplate>// TodoTemplate.jsx 안에 app.title,content 출력

)}
export default App;