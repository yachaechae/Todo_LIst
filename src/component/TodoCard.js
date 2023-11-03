import React from 'react'

export default function TodoCard({ todo, deleteTodo, doneTodo }) {
    return (
        <div className="todoCard">
            <div>{todo.todoTitle}</div>
            <div>{todo.todoContent}</div>
            <button onClick={()=>{deleteTodo(todo.todoId)}}>삭제하기</button>
            <button onClick={()=>{doneTodo(todo.todoId);}}>{todo.isDone ? '취소' : '완료'}</button>
        </div>
    );
}
