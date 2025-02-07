import { useState } from "react"


function App() {
const [item , setItem] =useState("")
const [input , setInput] = useState([])

{ for(let a in  input) { a }}
function theAdd(){
  return setInput(() => [...input , item])
}     



  return (
    <div>
 <input type="text"  onChange={ (e) => setItem(e.target.value)}/>
 <br />
 <button onClick={theAdd}>Add + </button>

<div className="div">
{input.map( (item, index) => { 
  return  <li key={index}>{item}</li> 
  })}
 
    
</div>
 

    </div>
   
  )
}

export default App