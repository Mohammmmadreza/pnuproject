import React, { useState } from 'react'
import {Routes,Route,useRoutes} from 'react-router-dom'
import './App.css'
import FluidExample from './components/Header/header'
import NavbarExp from './components/Navbar/Navbar'
import Home from './Home'

import routes from './routes'
function App() {
  let router=useRoutes(routes)
  return (
    <>
    <FluidExample></FluidExample>
   <NavbarExp></NavbarExp>  
   {router}
   
   </>
   
  )
}

export default App;
