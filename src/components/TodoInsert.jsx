import React, { useState } from 'react';
import {MdAdd} from "react-icons/md"
import "../styles/TodoInsert.scss";
const TodoInsert = ({onInsert}) => {//onInsert를 밖에서 받아와야함으로 써줌
    const [value,setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value)
    };
    const onSubmoit = (e) => {
        e.preventDefault();//동작때마다 새로고침 중지
        setValue("");//입력완료하면 비워줘야하니까 값삭제
        onInsert(value);//todos 배열에 추가해주는 역할
    };  
    return (
        <form className="TodoInsert" onSubmit={onSubmoit}>
            <input
                onChange={onChange}//값을바꿔주는함수
                value={value}//값 (벨류)
                placeholder="할일을 입력하세요"//입력상자에 출력하는 단어
            />
            <button type="submit">
                <MdAdd />

            </button>
        </form>
    );
};

export default TodoInsert;