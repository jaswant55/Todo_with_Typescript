import React, { useState } from 'react';
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
        console.log("id",id)
        setTodos(todos.map((todo)=> todo.id === id?{...todo, isDone: !todo.isDone}: todo)
        )}; 
    const handleDelete=(id: number)=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }; 
    const [edit, setEdit]= useState<boolean>(false);
    const [editTodo, setEditTodo]= useState<string>(todo.todo); 

    
  return (
    <div>
    <form className='todos_single'>
        {
            todo.isDone ?(
                <s className='todos_single_text'>
                {todo.todo}</s>
    
            
            ):(
                <span className='todos_single_text'>
                {todo.todo}</span>
    
            
            )
        }
       
        <div>
            <span className='icon'>
               <AiFillEdit />
            </span>
            <span className='icon'>
               <AiFillDelete onClick={()=>handleDelete(todo.id)}/>
            </span>
            <span className='icon'>
               <IoIosDoneAll onClick={()=>handleDone(todo.id)}/>
            </span>
        </div>
    </form>
    </div>
  )
}

export default SingleTodo;