import { useState } from "react";
function App() {
const [counter, setCounter] = useState(0)

const removeValue = () =>{
  if(counter > 0){
    setCounter(counter-1)
  }
} 
  return (
    <>
    <h1>Coffee and React</h1>
    <h2>Counter value here: {counter}</h2>
    <button onClick={() => setCounter(counter+1)}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
