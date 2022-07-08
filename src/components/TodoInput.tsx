import React, { useRef } from 'react'
import './InputField.css'
import { Button, Container, Form,} from 'reactstrap';

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent)=> void;
}


  // you can also write the type is that
  // const TodoInput : React.FC<Props>= ({todo, setTodo}) => {
const TodoInput= ({todo, setTodo, handleSubmit}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
    <Container fluid >
    <Form  className='input1' onSubmit={(e)=>{
      handleSubmit(e)
      inputRef.current?.blur();
      }}>
    
        <input placeholder='enter the todo' className='input_box'
        value={todo}
        ref={inputRef}
        onChange={(e)=>setTodo(e.target.value)}
        
        />
        <Button className='input_submit'>go</Button>
    </Form>
    </Container>
       </div>
  )
}

export default TodoInput;