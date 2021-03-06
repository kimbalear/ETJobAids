import React from 'react'
import { useNavigate, Routes, Route } from "react-router-dom"
import Init_1 from "./pages/init1"
import Init_2 from "./pages/init2"
import Init_3 from "./pages/init3"
import Ss1 from "./pages/ss1"
import Ss1_1 from "./pages/ss1_1"
import Ss1_2 from "./pages/ss1_2"
import Ss1_3 from "./pages/ss1_3"
import Ss1_4 from "./pages/ss1_4"
import Ss1_5 from "./pages/ss1_5"
import Ss1_6 from "./pages/ss1_6"
import Ss2 from "./pages/ss2"
import Ss3 from "./pages/ss3"
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
        <Route path="Ss1_2" element={<Ss1_2 />} />
        <Route path="Ss1_3" element={<Ss1_3 />} />
        <Route path="Ss1_4" element={<Ss1_4 />} />
        <Route path="Ss1_5" element={<Ss1_5 />} />
        <Route path="Ss1_6" element={<Ss1_6 />} />
        <Route path="Ss2" element={<Ss2 />} />
        <Route path="Ss3" element={<Ss3 />} />
      </Routes>
    </div>
  )
}

export default App