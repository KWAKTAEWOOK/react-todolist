import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import TodoEdit from "./components/TodoEdit";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //const nextId = useRef(4);

  const onInsert = async (text) => {
    try{
    const data = await axios({url: `http://localhost:4000/todos`,
    method: "POST",
    data:{text}
      });
      
    setTodos(data.data);
    } catch (e) {
      setError(e);
    }
  };
    // const todo = {
    //   id: nextId.current,
    //   text: text,
    //   checked: false,
    // };
    // setTodos((todos) => todos.concat(todo));
    // nextId.current++;
  

  const onInsertToggle = async () => {
    setInsertToggle((prev) => !prev);
  };

  const onRemove = async (id) => {
      try {
        const data = await axios({
          url: `http://localhost:4000/todos/${id}`,
          method: "DELETE",
        });
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
      } catch (e) {
        setError(e);
      }
    };
    
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));

  const onToggle = async (id) => {
    try {
      const data = await axios({
        url: `http://localhost:4000/todos/check/${id}`,
        method: "PATCH",
      });
      setTodos(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onUpdate = async (id, text) => {
    const data = await axios({
    url: `http://localhost:4000/todos/${id}`,
    method: "PATCH", 
    data:{perform_date:"2022-05-18 07:00:00", 
    text}})
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))//삼항연산자
    );
    onInsertToggle();
    setSelectedTodo();
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/todos",
          method: "GET",
        });

        console.log(data.data);
        setTodos(data.data);
        setIsLoading(false);
        // throw new Error("조회중 에러발생!!");
        // await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve()
        //   }, 3000)
        // })
      } catch (e) {
        setError(e);
      }
    };

    getData();
  }, []);

  if (error) {
    return <>에러: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        setSelectedTodo={setSelectedTodo}
      />
      {insertToggle && (
        <TodoEdit
          onInsertToggle={onInsertToggle}
          selectedTodo={selectedTodo}
          onUpdate={onUpdate}
        />
      )}
    </TodoTemplate>
  );
}

export default App;