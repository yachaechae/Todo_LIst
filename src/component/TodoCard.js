import React from 'react'

export default function TodoCard({ todo, deleteTodo, doneTodo }) {
    return (
        <div className="todoCard">
            <div className="todoTitle">{todo.todoTitle}</div>
            <div className="todoContent">{todo.todoContent}</div>
            <div className='btnGroup'>
                <button className='delete' onClick={()=>{deleteTodo(todo.todoId)}}>삭제하기</button>
                <button className='done' onClick={()=>{doneTodo(todo.todoId);}}>{todo.isDone ? '취소' : '완료'}</button>
            </div>
        </div>
    );
}
