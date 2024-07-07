import { useState } from "react";
import Child from "./Child";
function App() {
const [counter, setCounter] = useState(0)
const [userName, setUserName] = useState("")
const removeValue = () =>{
  if(counter > 0){
    setCounter(counter-1)
  }
} 

const addCounter = () => {
  if(counter < 5){
    setCounter(counter+1)
  }
}

function getUserName (user)  {
  console.log(`Hello ${user}` )
  setUserName(user);
}
  return (
    <>
    <h1>Coffee and React</h1>
    <h2>Counter value here: {counter}</h2>
    <button onClick={addCounter}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    <br />
    <br />
    <h2>Hello : {userName}</h2>
    <Child parentCallback={getUserName} />
    </>
  )
}

export default App
