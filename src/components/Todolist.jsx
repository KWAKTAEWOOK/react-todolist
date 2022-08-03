import React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = ({ todos, onRemove, onToggle, onInsertToggle, setSelectedTodo }) => {
    return (
        <div className="TodoList">
            {todos.map((todo, index) => (// 온 토글이 눌리면 텍스트가 렌더링되는로직
                <TodoListItem todo={todo} key={index} onToggle={onToggle} onRemove={onRemove} onInsertToggle={onInsertToggle} setSelectedTodo={setSelectedTodo}/>
            ))}
        </div>
    );
};

export default TodoList;