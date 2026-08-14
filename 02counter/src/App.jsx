import { useState } from 'react'
//hooks

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() 
{
  //default value
  //method to update default value
  let [counter,setCounter]=useState(15)



 
  // let counter=15//mot relect in ui
const addValue=()=>
  {
    counter=counter+1;
    setCounter(counter)
    //reprsent new value to set inside counter
    console.log(counter)
   
  }
  const removeValue=()=>
  {
    counter=counter-1;
    setCounter(counter)
    //reprsent new value to set inside counter
    console.log(counter)
   
  }

  return (
   
    <>
    <h1>Hello
    Vite
    </h1>
    <h1>Counter:5</h1>
     <p>{counter}</p>
    <button onClick={addValue}>Add Value</button>
   <br />
     <button onClick={removeValue}>Remove Value</button>
     <p>{counter}</p>
    </>
  )
}

export default App
