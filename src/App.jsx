//import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Context from './context/Context'
import Container from './UI/Container'
import AppQuetion from './quetionApp'
import Ai from './ai'
//import { Quetions } from './components/Quetions'
//import  Quetions from "./components/Quetions"

export default function App() {
  return (
    <Context>
      <BrowserRouter basename='/World_Fusion/'>
      <Routes>
        <Route path='/' element={<Container/>}/>
        <Route path="/question" element={<AppQuetion/>}/>
        <Route path='/ai' element={<Ai/>}/>
      </Routes>
      </BrowserRouter>
      
    </Context>
  )
}
