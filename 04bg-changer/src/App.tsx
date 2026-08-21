import { useState } from 'react'

import './App.css'

function App() {
 //reflect in ui
 const [color,setColor]=useState("olive");


 //onclick wants only function reference not function call becuse when call it returns but click event is not fired
  return (
    <>

    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>


      <div className='fixed bottom-[20px]  flex justify-center p-4 gap-2 inset-x-0  shadow-sm'>

       <div className="flex flex-wrap justify-center gap-3 bg-white rounded-2xl border-4 border-black p-4">
  <button className="bg-red-500 px-4 py-2 shadow-xl" onClick={()=>setColor("red")}>
    Red
  </button>
    <button className="bg-pink-500 px-4 py-2" onClick={()=>setColor("pink")}>
    Pink
  </button>
    <button className="bg-white-500 px-4 py-2" onClick={()=>setColor("white")}>
    white
  </button>
   <button className="bg-green-500 px-4 py-2" onClick={()=>setColor("green")}>
    Green
  </button>
    <button className="bg-yellow-500 px-4 py-2" onClick={()=>setColor("yellow")}>
    Yellow
  </button>
      <button className="bg-purple-500 px-4 py-2" onClick={()=>setColor("purple")}>
    Purple
  </button>
   
    <button className="bg-gray-200 px-4 py-2" onClick={()=>setColor("gray")}>
    Grey
  </button>
      <button className="bg-blue-500 px-4 py-2" onClick={()=>setColor("blue")}>
    Blue
  </button>
</div>

      </div>

    </div>

      
    </>
  )
}

export default App
