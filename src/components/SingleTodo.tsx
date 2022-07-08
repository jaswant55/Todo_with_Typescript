import React from 'react';
import {Todo}  from '../model';
import {AiFillEdit,AiFillDelete, } from 'react-icons/ai';
import {IoIosDoneAll } from 'react-icons/io';
import './InputField.css';
import TodoInput from './TodoInput';


type Props={
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
    const handleDone=(id: number)=>{
        setTodos(todos.map(todo)=> todo.id === id?{...todo, isDone: !TodoList.isDone}: todo)

    }
  return (
    <div>
    <form className='todos_single'>
        <span className='todos_single_text'>
            {todo.todo}

        </span>
        <div>
            <span className='icon'>
               <AiFillEdit onClick={()=>handleDone(todo.id)}/>
            </span>
            <span className='icon'>
               <AiFillDelete/>
            </span>
            <span className='icon'>
               <IoIosDoneAll/>
            </span>
        </div>
    </form>
    </div>
  )
}

export default SingleTodo