import React,{useState} from 'react';

import './App.css';
import TodoInput from './components/TodoInput';
import { Todo } from './model';
import TodosList from './components/TodosList';



// let name:string;
// name= 'k';
// let age:number;
// age=19;
// let isStudent:boolean;
// let role:[number, string];

// role=[5,'hello']

// type  x={
//   a:string,
//   b:number
// }

// let X: x={
//   a:'fgdg',
//   b: 12
// }

// type x={
//   a:string;
//   b:number;
// }

// type y = x &{
//     c: string,
//     d: number
// };

// let T : y ={
//   c:'hr',
//   a:'hdfdif',
//   b:12,
//   d:23
// }


const App: React.FC =() =>{

  const [todo, setTodo]= useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit=(e: React.FormEvent)=>{
    e.preventDefault(); 

    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone:false }])
      setTodo("")
    }

  }

  console.log(todos)
  return (
    <>
    <h2>ToDo App with TypeScript</h2>
    <TodoInput todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
    <TodosList todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
