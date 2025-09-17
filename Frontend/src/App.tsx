import "./App.css"
import ViewProfiles from "./Home/ViewProfiles"
import CreditDetail from "./CreditDetail/CreditDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  

  return (
    
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<ViewProfiles/>} />
        <Route path="/credit/:id" element={<CreditDetail/>}/>
     </Routes>
    </BrowserRouter>
    
  )
}

export default App
