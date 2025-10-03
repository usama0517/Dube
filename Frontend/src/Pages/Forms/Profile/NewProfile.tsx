import '../forms.css'
import Header from '../../../component/Header'
import { useState } from 'react'
import axios, { HttpStatusCode } from 'axios';

export default function NewProfile() {
    const [firstname,setFirstname] = useState<string>();
    const [lastname,setLastname] = useState<string>();
    const [phoneNum,setPhoneNum] = useState<string>();
    function createProfile(){
      axios.post('http://localhost:8080/api/1/customer',{
        firstName:firstname,
        lastName:lastname,
        phoneNumber:phoneNum
      })
      .then(response=>{
        if(response.status==HttpStatusCode.Ok){
          alert("Created Succsesfully");
          setFirstname("")
          setLastname("")
          setPhoneNum("")
        }
      })
      .catch(err=>{
        alert("Please try again There is an error")
        console.log(err)
      })

    }
      
  return (
    <>
    <Header/>
    
    <div className='form-container'>
      <form id='myForm' onSubmit={(e)=>e.preventDefault()}>
        <div className='label-holder'>
        <label>First Name</label>
             <input name='fname' type='text' placeholder='Please Enter First Name'
              required 
             onChange={(e)=>setFirstname(e.target.value)}
             value={firstname} />
        </div>

        <div className='label-holder'>
              <label>Last Name</label>
             <input name='fname' type='text' placeholder='Please Enter Last Name' 
             required 
             onChange={(e)=>setLastname(e.target.value)}
             value={lastname} />
        </div>

        <div  className='label-holder'>
              <label>Phone: </label>
             <input name='fname' type='text' placeholder='Please Enter Phone Number' pattern="{[0][0-9]{9}}" 
             required 
             onChange={(e)=>setPhoneNum(e.target.value)} 
             value={phoneNum}/>
             </div>
             
             <div className="low-button-holder">
            <button className="low-button" onClick={createProfile}>Create New profile</button>
          </div>
      </form>
          
    </div>
    
    </>
  )
}
