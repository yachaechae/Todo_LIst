import React from 'react';
import TodoCard from './TodoCard';

export default function TodoBoard({todoList, setTodoList}) {
    const deleteTodo = (todoId) => {
        const activeTodo = todoList.filter((todo) => {
            console.log(todo)
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
            <h3 className="listTitle">Working🧑‍💻</h3>
            <div className="todoCard">
                {todoList.map((todoItem) => {
                    console.log(todoItem);
                    if (!todoItem.isDone) {
                        return <TodoCard todo={todoItem} deleteTodo={deleteTodo} doneTodo={doneTodo} />;
                    } else return null;
                })}
            </div>
            <h3 className="listTitle">Done!🎊</h3>
            <div className="todoCard">
                {todoList.map((todoItem) => {
                    if (todoItem.isDone) {
                        return <TodoCard todo={todoItem} deleteTodo={deleteTodo} doneTodo={doneTodo}/>;
                    } else return null;
                })}
            </div>
        </div>
    );
}
