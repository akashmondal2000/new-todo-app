// import './App.css';
//https://codingbeautydev.com/blog/react-get-input-value-on-button-click/ first resourse

import { useState } from "react";


function App() {

  const [input,setInput]=useState("");

  const [update,setUpdate]=useState();

  const handleChange =(element)=>{
    setInput(element.target.value)

  }

  const handleClick = ()=>{
    setUpdate(input)
  }


  return (
    <div className="App">
   
    <input type="text"
    name="input"
    onChange ={handleChange}
    value={input}
     />
     <p>{update}</p>

     <button onClick={handleClick}>Submit</button>

    </div>
  );
}

export default App;
