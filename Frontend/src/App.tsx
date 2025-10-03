import "./App.css"
import ViewProfiles from "./Pages/Home/ViewProfiles"
import CreditDetail from "./Pages/ProfileDetail/ProfileDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewProfile from "./Pages/Forms/Profile/NewProfile"
import NewCredit from "./Pages/Forms/Credit/NewCredit"
import EditCredit from "./Pages/Forms/Credit/EditCredit"
import EditProfile from "./Pages/Forms/Profile/EditProfile"
function App() {
  

  return (
    
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<ViewProfiles/>} />
        <Route path="/profile/:id" element={<CreditDetail/>}/>
        <Route path="/create/profile" element={<NewProfile/>}/>
        <Route path="/profile/:id/create/credit" element={<NewCredit/>}/>
        <Route path="/profile/:id/edit/credit/:cid" element={<EditCredit/>}/>
        <Route path="/profile/:id/edit" element={<EditProfile/>}/>
     </Routes>
    </BrowserRouter>
    
  )
}

export default App
