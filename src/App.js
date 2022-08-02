import React, { useRef,useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
function App() {
  const [todos, setTodos] = useState([]);//값이 들어갈 빈배열만듬
  const nextId = useRef(1);//아이디 할당
  const onInsert = (text) => {
    const todo = {
      id:nextId,
      text: text,
      checked: false,
    };
    setTodos((todos) =>todos.concat(todo));//입력값 추가
      nextId.current++;
  };

  return(
  <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <button onClick={()=>{
      console.log(todos);
    }}>show todos</button>
  </TodoTemplate>

  );
}
export default App;