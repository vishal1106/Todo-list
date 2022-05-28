import React, { useState } from 'react'



const Todo = () => {
  const[newtodo,setTodos]=useState("")
  const [todo,setTodo]= useState([])

  return (
    <div>
        <h2>todo list </h2>
    <input type="text" placeholder='Write Something' onChange={(e)=>{
     
     setTodos(e.target.value)
    }}/>
    <button onClick={()=>{
    
    
     setTodo([

       ...todo,{
         id:Date.now(), value:newtodo, IsCompleted:false
       }
     ])
    }}>Add</button>
   {  todo.map((tod) =>(
    <div>{tod.value}</div>
    ))}
    </div>
  );
}
export default Todo;