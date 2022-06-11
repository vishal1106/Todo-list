import React, { useState } from 'react'



const Todo = () => {
  const[newtodo,setTodos]=useState("")
  const [todo,setTodo]= useState([])

  return (
    <div>
        <h2>todo list </h2>
    <input style={{width:"270px"}}type="text" placeholder='Write Something' onChange={(e)=>{
     
     setTodos(e.target.value)
    
    }}/>
    
    <button onClick={()=>{
    
    
     setTodo([

       ...todo,{
         id:Date.now(), value:newtodo, IsCompleted:false
       }
     ])
    }}>Add</button>
     {console.log(todo)}
   {  todo.map((tod) =>(
    <div style={{display:"flex",justifyContent:"space-between",boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",width:"300px",margin:"auto" ,marginTop:"20px" ,textAlign:"left",paddingLeft:"10px" ,height:"40px"}}>
      <h3 style={{marginTop:"2px"}}>{tod.value}</h3>
      <input style={{marginRight:"10px",marginTop:"10px"}} type="radio" checked/>
    </div>

    ))}
    </div>
  );
}
export default Todo;