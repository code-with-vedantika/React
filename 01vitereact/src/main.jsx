import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {username} from './App.jsx'
import './index.css'
import App from './App.jsx'
// Import the default export from App.jsx 
// and give it the local name App.
import { createElement } from 'react'


// createRoot lets you create a root to display 
// React components inside a browser DOM node.

// React will create a root for 
// the domNode, and take over managing
//  the DOM inside it. After you’ve created
//   a root, you need to call root.render 
// //   to display a React component inside of it:

// root.render(<App />);
// reactNode: A React node that you want to display.
//  This will usually be a piece of 
//  JSX like <App />, but you can 
//  also pass a React element constructed 
//  with createElement(), a string, 
//  a number, null, or undefined
// const reactElement=
// {
//     type:'a',
//     props:
//     {
//         href:"https://google.com",
//         target:"_blank"
//     },
//     children:'click me to visit google'
// }

const anotherUser="vedantika"
//The new Element.
//at the end of the  day React Element is a just object so we cant write 
//if else in it
const reactElement=createElement('a',{href:"https://google.com",target:"_blank"},"clickme to visit google",username)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  reactElement

)
