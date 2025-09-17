import '../forms.css'
import Header from '../../../component/Header'
import "./newCredit.css"
export default function NewCredit() {
  return (
    <>
    <Header/>
       <div className='name-holder'>
        <h3>Name:-</h3>
       </div>
       
    <div className='form-container'>
      <form >
        <div className='label-holder'>
        <label>Item</label>
             <input name='fname' type='text' placeholder='Please Enter Item' required />
        </div>

        <div className='label-holder'>
              <label>Price</label>
             <input name='fname' type='number' min={"1"}  placeholder='Please Enter Price' required />
        </div>
           
            <div className='label-holder'>
              <label>qty</label>
             <input name='fname' type='number' min="1"  placeholder='Please Enter Price' required />
        </div>
        <div  className='label-holder'>
              <label>Total </label>
             <input name='total' type='text' value={0} disabled  />
             </div>
             
             <div className="low-button-holder">
            <button className="low-button">Add Credit</button>
          </div>
      </form>
          
    </div>
    
    </>

   
  ) 

}
