import { useState } from 'react'


function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(prevCounter => prevCounter - 1)
  }

  return (
    <>
      <h1>Hello Vite</h1>

      <h1>Counter: {counter}</h1>

      <p>{counter}</p>

      <button
        onClick={addValue}
        className="bg-yellow-300 px-2 py-2 rounded-xl text-blue-500 hover:bg-yellow-400"
      >
        Add Value
      </button>

      <br />

      <button
        onClick={removeValue}
        className="bg-red-500 px-2 py-2 rounded-xl text-white hover:bg-red-600"
      >
        Remove Value
      </button>

      <p>{counter}</p>
    </>
  )
}

export default App


// "Because React batches state updates,
//  the state variable captured by the current render
//   may not reflect earlier updates in the same event. 
//   A functional updater receives the latest pending state,
//    so multiple updates are applied sequentially and correctly."
// Suppose:

// const [counter, setCounter] = useState(15);
// Case 1: Using counter + 1
// const add = () => {
//   setCounter(counter + 1);
//   setCounter(counter + 1);
//   setCounter(counter + 1);
// };

// You might expect:

// 15 → 16 → 17 → 18

// But that's not what happens.

// During this event handler, counter is still the value from the current render:

// counter = 15

// So all three calls effectively become:

// setCounter(16);
// setCounter(16);
// setCounter(16);

// React batches these updates, and the final state is:

// 16
// Think of it like this
// Current render:
// counter = 15


// setCounter(counter + 1)
//              ↓
//           15 + 1
//              ↓
//            16


// setCounter(counter + 1)
//              ↓
//           15 + 1
//              ↓
//            16


// setCounter(counter + 1)
//              ↓
//           15 + 1
//              ↓
//            16


// React batches them
//              ↓
// Final counter = 16
// Case 2: Functional updater

// Now:

// const add = () => {
//   setCounter(prevCounter => prevCounter + 1);
//   setCounter(prevCounter => prevCounter + 1);
//   setCounter(prevCounter => prevCounter + 1);
// };

// This gives:

// 15 → 16 → 17 → 18

// Why?

// Because React queues the functions, and applies them one after another to the latest state:

// Initial state = 15


// First updater:
// prevCounter = 15
// 15 + 1 = 16


// Second updater:
// prevCounter = 16
// 16 + 1 = 17


// Third updater:
// prevCounter = 17
// 17 + 1 = 18

// So final:

// counter = 18