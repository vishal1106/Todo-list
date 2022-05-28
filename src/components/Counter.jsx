import React,{ useState } from "react";

const Counter=()=>{
    const [count,setCount]=React.useState(0)

    return (
        <div>
        
            <h1>counter App:{count}</h1>
 <button onClick={()=>setCount(count+1)}> increment</button>
 <button onClick={()=>setCount(count-1)}> decrememt</button>
        </div>
    );
        

}
export default Counter;