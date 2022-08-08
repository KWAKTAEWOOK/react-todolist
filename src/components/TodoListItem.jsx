import React from 'react';
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdModeEditOutline,
    MdRemoveCircleOutline,
  } from "react-icons/md";
import cn from "classnames";
import "../styles/TodoListItem.scss";

const TodoListItem = ({
    todo, 
    onToggle, 
    onRemove, 
    onInsertToggle ,
    setSelectedTodo
}) => {
    const {id,text,checked}= todo;
    return (
        <li className="TodoListItem">
            
        <div 
            className={cn("checkbox", { checked: checked })}
            onClick={() =>{onToggle(id)}}
            
        >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
        </div>
        <div 
            className="edit" 
            onClick={() => {
                onInsertToggle();
                setSelectedTodo(prev=>todo);

        }}>
            <MdModeEditOutline />
        </div>
        <div className="remove" onClick={()=> {
            onRemove(id);
            console.log(id);
            alert(`${id}가삭제되었습니다.`)
            
        }}>
            
            <MdRemoveCircleOutline />
        </div>
        </li>
    );
};

export default TodoListItem;