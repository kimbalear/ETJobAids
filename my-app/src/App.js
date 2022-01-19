import React from 'react'
import { useNavigate, Routes, Route } from "react-router-dom"
import Init_1 from "./pages/init1"
import Init_2 from "./pages/init2"
import Init_3 from "./pages/init3"
import Ss1 from "./pages/ss1"
import Ss1_1 from "./pages/ss1_1"

const name = 'John'
const element = <p>Hello {name}</p>



const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Init_1 />} />
        <Route path="Init_2" element={<Init_2 />} />
        <Route path="Init_3" element={<Init_3 />} />
        <Route path="Ss1" element={<Ss1 />} />
        <Route path="Ss1_1" element={<Ss1_1 />} />
      </Routes>
    </div>
  )
}

export default App