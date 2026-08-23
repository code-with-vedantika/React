import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom'
import About from './components/about/about.jsx'
import Home from './components/home/home.jsx'

import Layout from './layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "about",
//       element: <About />
//     },
//     {
//       path: "contact",
//       element: <Contact />

//     }]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="user/:userid" element={<User />}></Route>
      <Route 
       path="github" element={<Github />}></Route>


    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
