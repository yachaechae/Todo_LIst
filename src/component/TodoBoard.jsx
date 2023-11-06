import React from 'react';
import TodoCard from './TodoCard';

export default function TodoBoard({todoList, setTodoList}) {

    const deleteTodo = (todoId) => {
        const activeTodo = todoList.filter((todo) => {
            return todoId !== todo.todoId;
        });
        setTodoList(activeTodo);
    };

    const doneTodo = (todoId) => {
        const finishedTodo = todoList.map((todo) => {
            if (todoId === todo.todoId) {
                return { ...todo, isDone: !todo.isDone };
            }else{
                return { ...todo};
            }
        })
        setTodoList(finishedTodo);
    };
    

    return (
        <div className="todoContainer">
            <h2 className="listTitle">Working🧑‍💻</h2>
            <div className="todoList">
                {todoList.map((todoItem) => {
                    if (!todoItem.isDone) {
                        return <TodoCard todo={todoItem} deleteTodo={deleteTodo} doneTodo={doneTodo} />;
                    } else return null;
                })}
            </div>
            <h2 className="listTitle">Done!🎊</h2>
            <div className="todoList">
                {todoList.map((todoItem) => {
                    if (todoItem.isDone) {
                        return <TodoCard todo={todoItem} deleteTodo={deleteTodo} doneTodo={doneTodo}/>;
                    } else return null;
                })}
            </div>
        </div>
    );
}
