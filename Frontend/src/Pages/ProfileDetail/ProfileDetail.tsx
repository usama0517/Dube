import { Link,useNavigate, useParams} from 'react-router-dom'
import './profileDetail.css'
import { useEffect, useState } from 'react';
import axios, { HttpStatusCode } from 'axios';
import Header from '../../component/Header';

interface Credit{
       date: Date,
       id: number,
       itemName:string,
       phoneNumber:string,
       price: number
       qty: number
       total:number
       paid:boolean
}

export default function CreditDetail() {
 
           const [firstName,setFirstname] = useState<string>();
           const [lastName,setLastname] = useState<string>();
           const [phoneNumber, setPhoneNumber] = useState<string>();
           const [credits, setCredits]=  useState<Credit[]>([]);
           const [change , setChange] = useState<number>(0)
           const {id} = useParams();
           const nav = useNavigate();
          
           function fetchProfile(){
                  axios.get(`http://localhost:8080/api/1/customer/${id}`)
                  .then(response=>{
                    setFirstname(response.data.firstName)
                    setLastname(response.data.lastName)
                    setPhoneNumber(response.data.phoneNumber)
                    setCredits(response.data.credits)
                  })
                  .catch(err=>console.log(err))
           }
              useEffect(
                ()=>{
                     fetchProfile();
                },[change]
              )

   function goToEditCredit(id:number){
    nav(`./edit/credit/${id}`)
   }

   function payCredit(){
    axios.get(`http://localhost:8080/api/1/customer/${id}/pay-all-credits`)
    .then(res=>{
      if(res.status===HttpStatusCode.Ok){
        alert("all Credits are paid")
        setChange(change+1);
      }
      else{
        alert("Please try again")
      }
    })
    .catch(err=>console.log(err));

   }
   const goToNewCredit = ()=>nav("./create/credit")
  

  return (
    <>
    <div className="nav">
         <Header/>

         <div className='top-button-holder'>
         <Link to={`./edit`}
         style={{color:"black", marginLeft:"10px", marginRight:"40px"}}
         > <h2>EditProfile</h2></Link>
         <button onClick={goToNewCredit}>+ New</button>
         </div>

    </div>
    
    <div className='info-displayer'>
        <div>
        <h3>Name: {firstName} {lastName} </h3>

         <h3>Phone: {phoneNumber} </h3>
        </div>

         <h3>Total: {credits.reduce((sum, item) => sum + item.total, 0)} </h3>
    </div>
    

      <div className='table-container'>
       <table>
       <thead>
        <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Status</th>
        </tr>
       </thead>

       <tbody>
           { 
             
            credits.map((val)=>{ 
               

                return  (
              
              <tr onClick={()=>goToEditCredit(val.id)} key={val.id}>
            <td>12/11/17</td>
            <td>{val.itemName}</td>
            <td>{val.price}$</td>
            <td>{val.qty}</td>
            <td>{val.total}</td>
            <td>{val.paid? "Paid": "UnPaid"}</td>
          </tr>
          
            )
})             
        
           }
          
       
       </tbody>

       </table>
        
      </div>


      <div className='low-button-holder'>
        <button className='low-button' onClick={goToNewCredit}>Add New Credit</button>
        <button className='low-button' onClick={payCredit}>Pay All Credits</button>
      </div>
    </>
  )
}
