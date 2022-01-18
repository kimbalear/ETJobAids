import React from 'react'
import { Routes, Route } from "react-router-dom"
import Inita from "./pages/init1"
import Initb from "./pages/init2"


const name = 'John'
const element = <p>Hello {name}</p>



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Inita/> } />
        <Route path="about" element={ <Initb/> } />
      </Routes>
    </div>
  )
}

export default App