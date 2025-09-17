import '../forms.css'
import Header from '../../../component/Header'
export default function EditCredit() {
  return (
    <>
    <Header/>
       <div className='name-holder'>
        <h3>Name:-</h3>
       </div>
       
    <div className='form-container'>
      <form onSubmit={(e)=>{submitter(e.nativeEvent as SubmitEvent)}}>
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
             
             <div className="button-holder">
            <button className="edit-button">Save</button>
             <button className="edit-button">Delete</button>
          </div>
      </form>
          
    </div>
    
    </>

   
  ) 
  function submitter(e: SubmitEvent) {
  e.preventDefault();
  // logic here
}
}
