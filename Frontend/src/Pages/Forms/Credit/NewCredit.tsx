import { useEffect, useState } from 'react'
import Header from '../../../component/Header'
import '../forms.css'
import "./newCredit.css"
import axios, { HttpStatusCode } from 'axios'
import { useParams } from 'react-router-dom'

export default function NewCredit() {
         const {id}= useParams();
         const [itemName,setItemName]=useState<string>();
         const [fname , setFname]= useState<string>()
         const [lname , setLname]= useState<string>()
         const [price,setPrice] = useState<number>(0)
         const [qty,setQty] = useState<number>(1)
         function fetchProfile() {
      axios.get(`http://localhost:8080/api/1/customer/${id}`)
                  .then(response=>{
                    setFname(response.data.firstName)
                    setLname(response.data.lastName)
                    
                  })
                  .catch(err=>console.log(err))
          }

          function createCredit(){
              axios.post(`http://localhost:8080/api/shopKeeper/${id}/credit`,
                {
                  itemName,
                  price,
                  qty

                }
              )
              .then(res=>{
                if(res.status==HttpStatusCode.Ok){
                      alert("Credit Created Succsessfylly")  
                      setItemName("")
                      setPrice(0)
                      setQty(1)
                }
              })
              .catch(err=>{
                alert("Please try again There is an error")
        console.log(err)
              });
          }
          useEffect(()=>{
            fetchProfile()


          },
          
          []
        
        )


  return (
    <>
       <Header />
       <div className='name-holder'>
        <h3>Name:-{fname} {lname}</h3>
       </div>
       
    <div className='form-container'>
      <form onSubmit={e=>e.preventDefault()}>
        <div className='label-holder'>
        <label>Item</label>
             <input 
             name='fname' 
             type='text' 
             placeholder='Please Enter Item' 
             onChange={e=>setItemName(e.target.value)}
             value={itemName}
             required />
        </div>

        <div className='label-holder'>
              <label>Price</label>
             <input 
             name='fname' 
             type='number' min={"0"}  
             placeholder='Please Enter Price' 
             id='price' 
             value={price}
             onChange={(e)=>{
              setPrice(parseFloat(e.target.value))
      
             }} 
             required />
        </div>
           
            <div className='label-holder'>
              <label>Qty</label>

             <input id='qty' 
             name='fname' 
             type='number' min="1"  
             placeholder='Please Enter Quantity' 
             value={qty}
             onChange={(e)=>{
              setQty(parseFloat(e.target.value))
              
            }} 
             required />
        </div>
        <div  className='label-holder'>
              <label>Total </label>
             <input name='total' type='text' value={qty*price} disabled  />
             </div>
             
             <div className="low-button-holder">
            <button className="low-button" onClick={()=>{
              if(price!=0){
                createCredit();
              }}}>
            Add Credit
            </button>
          </div>
      </form>
          
    </div>
    
    </>

   
  ) 

}
