import React from 'react'
import { Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './pages/About/About'
import Skill from './pages/Skills/Skill'
import Contact from './pages/Contact/Contact'
import Project from './pages/Projects/Project'
import RootLayout from './layout/RootLayout'
import './App.css';

const App = () => {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<About/>}/>
        <Route path='skills' element={<Skill/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App