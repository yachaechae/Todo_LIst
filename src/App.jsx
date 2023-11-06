import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoBoard from './component/TodoBoard';

let todoNumber = 0
const defaultInput = {
    todoId: 0,
    todoTitle: '',
    todoContent: '',
    isDone: false,
};

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState(defaultInput);

    const todoText = (e) =>{
        const { name,value } = e.target

        setTodo({
            ...todo,
            [name]: value,
        });
    }

    const addTodo = (event) => {
        event.preventDefault();
        console.log(todo)
        setTodoList([...todoList, { ...todo, todoId: todoNumber }]);
        setTodo(defaultInput);
        todoNumber++;
    }
    
    return (
        <div className="App">
            <header>
                <div>My Todo List</div>
                <div>React</div>
            </header>
            <form onSubmit={addTodo} className="addTodoForm">
                <div className="inputBox">
                    <input
                        type="text"
                        name="todoTitle"
                        value={todo.todoTitle}
                        onChange={todoText}
                        required
                        autoFocus
                    />
                    <label htmlFor="todoTitle">제목</label>
                    <span></span>
                </div>
                <div className="inputBox">
                    <input
                        type="text"
                        name="todoContent"
                        value={todo.todoContent}
                        onChange={todoText}
                        required
                    />
                    <label htmlFor="todoContent">내용</label>
                    <span></span>
                </div>
                <button className="addBtn">추가하기</button>
            </form>

            <TodoBoard todoList={todoList} setTodoList={setTodoList} />
        </div>
    );
}

export default App;
