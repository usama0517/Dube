import axios, { HttpStatusCode } from "axios";
import { useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom";
import Header from "../../../component/Header";


export default function EditProfile() {
           const [firstName,setFirstname] = useState<string>();
           const [lastName,setLastname] = useState<string>();
           const [phoneNumber, setPhoneNumber] = useState<string>();
           const {id} = useParams();
           const nav = useNavigate();
           function fetchProfile(){
                  axios.get(`http://localhost:8080/api/1/customer/${id}`)
                  .then(response=>{
                    setFirstname(response.data.firstName)
                    setLastname(response.data.lastName)
                    setPhoneNumber(response.data.phoneNumber)
                  })
                  .catch(err=>console.log(err))
           }
              useEffect(
                ()=>{
                     fetchProfile();
                },[]
              )
              function updateProfile(){
                if(window.confirm("Are you Sure You want to update customer information")){
                  axios.post(`http://localhost:8080/api/1/customer/${id}`,
                    {firstName,lastName,phoneNumber}
                  )
                  .then(res=>{
                    if(res.data){
                      alert("Updated Succsessfully")
                      nav('..');
                    }
                    else{
                      alert("couldn't update please try again" )
                    }
                  })
                  .catch(err=>console.log(err))
                }

              }
         function deleteProfile(){
          if(window.confirm("Are you Sure You want to Delete customer information")){
                  axios.delete(`http://localhost:8080/api/1/customer/${id}`)
                  .then(res=>{
                    if(res.status===HttpStatusCode.Ok){
                      alert("Deleted Succsessfully")

                    }
                    else{
                      alert("couldn't delete please try again" )
                    }
                  })
                  .catch(err=>console.log(err))
                }

         }
  return (
          <>
          <Header />
    <div className='form-container'>
      <form onSubmit={e=>e.preventDefault()}>
        <div className='label-holder'>
        <label>First Name</label>
             <input name='fname' type='text' placeholder='Please Enter First Name' 
             onChange={e=>setFirstname(e.target.value)} 
             value={firstName}
             required
             />
             
        </div>

        <div className='label-holder'>
              <label>Last Name</label>
             <input name='lname' type='text' placeholder='Please Enter Last Name'
             onChange={e=>setLastname(e.target.value)} 
             value={lastName}
             required
             />
        </div>

        <div  className='label-holder'>
              <label>Phone: </label>
             <input name='pnum' type='text' placeholder='Please Enter Phone Number' 
             pattern="{[0][0-9]{9}}"
             onChange={e=>setPhoneNumber(e.target.value)} 
             value={phoneNumber}
             required
             />
             </div>
             
            <div className="button-holder">
            <button className="edit-button" type="submit" onClick={updateProfile}>Save</button>
             <button className="edit-button"  onClick={deleteProfile}>Delete</button>
          </div>
      </form>
          
    </div>
    
    </>
  )
}
