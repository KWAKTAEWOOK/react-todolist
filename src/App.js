import React, { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e)=> {
    e.preventDefault();
    if(todo === ""){
      alert("한글자 이상 입력해주세요")
      return;//유효성 검사
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
    alert("등록됨")
  };
  return (
    <div>
      <h1>할 일</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={todo}
          placeholder="할 일을 적어주세요."
        />
        <button>등록</button>
      </form>
      <button 
        onClick={()=>{
          console.log(todos);
        }}
      >
        체크
      </button>
      <hr />
      <ul>
          {todos.map((todo, index)=> (
            <li key={index}>{todo}</li>
          ))}
      </ul>
    </div>
  );
}
export default App;