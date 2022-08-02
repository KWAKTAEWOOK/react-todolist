import "../styles/TodoTemplate.scss";

function TodoTemplate({ children }) {//children이 꼭 들어가야함 대문자도들어가면안됨,TodoTemplate({children)}은 TodoTemplate안에 있는것을 출력가능하게함
    return ( 
        <div className="TodoTemplate">
            <div className="app-title">Todo list</div>
            <div className="content">{children}</div>
        </div>//
    );// scss의 기본적인 틀을 만들어줌
}

export default TodoTemplate;