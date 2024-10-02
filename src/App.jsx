//import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Context from './context/Context'
import Container from './UI/Container'
import AppQuetion from './quetionApp'
//import { Quetions } from './components/Quetions'
//import  Quetions from "./components/Quetions"

export default function App() {
  return (
    <Context>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}/>
        <Route path="/quetion" element={<AppQuetion/>}/>
      </Routes>
      </BrowserRouter>
      
    </Context>
  )
}
