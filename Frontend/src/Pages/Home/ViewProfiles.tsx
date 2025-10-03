import { Link, useNavigate} from 'react-router-dom'
import './viewProfile.css'
import Card from './Card'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewProfiles() {
 interface customers{
         id: number,
        firstName: string,
        lastName: string,
        phoneNumber: string
 }

   const [array,setArray] = useState<customers[]>([]);
    const nav = useNavigate();
    function goToNewProfile(){
      nav("/create/profile")
    }
    
    useEffect(
      ()=>{
         function featcher (){
      console.log("I am Fetching.....")
        axios.get("http://localhost:8080/api/1/customer")
        .then(response=>{
          console.log(response.data);
           setArray(response.data);
        })
        .catch(err=>console.log(err));
    }
    featcher();
      }
      

      ,[]
    )
    
  return (
  <>
        
   
    <div className="top-button-holder">
      <button onClick={goToNewProfile} >+ New Profile</button>
      </div>
      
      { array ?
      array?.map((val)=>(
       <Link to={`profile/${val.id}`} key={val.id}>
       <Card
       firstName={val.firstName}
       lastName={val.lastName}
       />
       </Link>
      )) : 
      (<div>
        <h2>No Customers are available</h2>
      </div>)
      }
                   
      
       
     <div className="low-button-holder">
     <button className="low-button" onClick={goToNewProfile}> + Create New Profile</button>
     </div>

  </>
  )
}
