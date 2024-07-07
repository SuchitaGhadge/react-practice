import React from 'react';
import { useState } from 'react';
function Child(props) {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name: ", name);
        props.parentCallback(name)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"  placeholder="Enter your name" onChange={(event) => setName(event.target.value)} />
            <button >Submit </button>
        </form>
    </div>
  )
}

export default Child