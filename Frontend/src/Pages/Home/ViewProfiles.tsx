import { NavLink } from 'react-router-dom'
import './viewProfile.css'

export default function ViewProfiles() {
  return (
  <>
        <NavLink style={{margin:"10px"}} to={"/credit/1"}>Credit Detail </NavLink>
        <NavLink style={{margin:"10px"}} to={"/create/profile"}>New Profile </NavLink>
          <NavLink style={{margin:"10px"}} to={"/create/credit"}>New Credit </NavLink>
          <NavLink style={{margin:"10px"}} to={"/edit/credit"}>Edit Credit </NavLink>
          <NavLink style={{margin:"10px"}} to={"/edit/profile"}>Edit profile </NavLink>
   
    <div className="top-button-holder">
      <button >+ New Profile</button>
      </div>
                   
      <div className="card">
        
        <h3>Usama </h3>
        <h3>Abdurahman</h3>
      </div>
        
      <div className="card">
        
        <h3>Usama </h3>
        <h3>Abdurahman</h3>
      </div>

        
      <div className="card">
        
        <h3>Usama </h3>
        <h3>Abdurahman</h3>
      </div>
      
       

                
      <div className="card">
        
        <h3>Usama </h3>
        <h3>Abdurahman</h3>
      </div>
        
      <div className="card">
        
        <h3>Usama </h3>
        <h3>Abdurahman</h3>
      </div>


      <div className="card">
        
        <h3>Usama </h3>
        <h3>Abdurahman</h3>
      </div>
      
       

        
      <div className="card">
        
        <h3>Usama </h3>
        <h3>Abdurahman</h3>
      </div>

      <div className="card">
        
        <h3>Usama </h3>
        <h3>Abdurahman</h3>
      </div>


      <div className="card">
        
        <h3>Usama </h3>
        <h3>Abdurahman</h3>
      </div>
      
     <div className="low-button-holder">
     <button className="low-button"> + Create New Profile</button>
     </div>

  </>
  )
}
