import React from 'react';
import {Todo} from '../model';
import './InputField.css';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='List'>
            {todos.map((todo)=>(
              <SingleTodo todo={todo} key={todo.id}
              todos={todos}
              setTodos={setTodos}
              
              />  
            ))}
    </div>
  )
}

export default React.memo(TodosList);