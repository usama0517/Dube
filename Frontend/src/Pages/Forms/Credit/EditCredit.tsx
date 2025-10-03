import '../forms.css'
import Header from '../../../component/Header'
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { HttpStatusCode } from 'axios';

export default function EditCredit() {

           const [itemName,setItemName] = useState<string>();
                      const [price,setPrice] = useState<number>(0);
                      const [qty, setQty] = useState<number>(1);
                      const [isPaid,setIsPaid]= useState<boolean>(false)
                      const {cid} = useParams();
                      const {id} = useParams();
                      
                      function fetchCredit(){
                             axios.get(`http://localhost:8080/api/shopKeeper/${id}/credit/${cid}`)
                             .then(response=>{
                               setItemName(response.data.itemName)
                               setPrice(response.data.price)
                               setQty(response.data.qty)
                               setIsPaid(response.data.paid)
                             })
                             .catch(err=>console.log(err))
                      }
                         useEffect(
                           ()=>{
                                fetchCredit();
                           },[]
                         )
                         function updateCredit(){
                           if(window.confirm("Are you Sure You want to update credit information")){
                             axios.post(`http://localhost:8080/api/shopKeeper/${id}/credit/${cid}`,
                               {price,qty,itemName}
                             )
                             .then(res=>{
                               if(res.data){
                                 alert("Updated Succsessfully")
                                 history.back();
                               }
                               else{
                                 alert("couldn't update please try again" )
                               }
                             })
                             .catch(err=>console.log(err))
                           }
           
                         }
                          function payCredit(){
                           if(window.confirm("Are you Sure You want to Pay credit ")){
                             axios.get(`http://localhost:8080/api/shopKeeper/${id}/credit/pay/${cid}` )
                             .then(res=>{
                               if(res.data){
                                 alert("Paid Succsessfully")
                                 history.back();
                               }
                               else{
                                 alert("couldn't Pay please try again" )
                               }
                             })
                             .catch(err=>{
                              alert("couldn't Pay please try again" )
                              console.log(err)
                            })
                           }
           
                         }
                    function deleteCredit(){
                     if(window.confirm("Are you Sure You want to Delete customer information")){
                             axios.delete(`http://localhost:8080/api/shopKeeper/${id}/credit/${cid}`)
                             .then(res=>{
                               if(res.status===HttpStatusCode.Ok){
                                 alert("Deleted Succsessfully")
                                 history.back();
           
                               }
                               else{
                                 alert("couldn't delete please try again" )
                               }
                             })
                             .catch(err=>{
                              alert("couldn't delete please try again" )
                              console.log(err)
                            })
                           }
           
                    }
                    

  return (
    <>
     <Header />
      {isPaid ? document.getElementById("pay-button")?.classList.add("invisible"): null}
       
    <div className='form-container'>
      <form onSubmit={e=>e.preventDefault()}>
        <div className='label-holder'>
        <label>Item</label>
             <input 
             name='fname' 
             type='text' 
             placeholder='Please Enter Item' 
             value={itemName}
             onChange={(e)=>setItemName(e.target.value)}
             required />
        </div>

        <div className='label-holder'>
              <label>Price</label>
             <input name='fname' 
             type='number' min={"1"}  
             placeholder='Please Enter Price' 
             value={price}
             onChange={(e)=>setPrice(parseFloat(e.target.value))}
             required />
        </div>
           
            <div className='label-holder'>
              <label>qty</label>
             <input 
             name='fname' 
             type='number' 
             min="1" 
             placeholder='Please Enter Price' 
             required
             onChange={(e)=>setQty(parseFloat(e.target.value))}
             value={qty}
             />
        </div>
        <div  className='label-holder'>
              <label>Total </label>
             <input 
             name='total' 
             type='number'  
             disabled
             value={price*qty}  />
             </div>
             
             <div className="button-holder">
            <button className="edit-button" onClick={()=>{
              if(price>0){
                   updateCredit();
              }
            }}>Save</button>
             <button className="edit-button" id='pay-button' onClick={payCredit}>Pay</button>
             <button  className="edit-button" onClick={deleteCredit}>Delete</button>
          </div>
      </form>
          
    </div>
    
    </>

   
  ) 


}
