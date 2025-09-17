

export default function EditProfile() {
  return (
    
    <div className='form-container'>
      <form onSubmit={()=>false}>
        <div className='label-holder'>
        <label>First Name</label>
             <input name='fname' type='text' placeholder='Please Enter First Name' />
        </div>

        <div className='label-holder'>
              <label>Last Name</label>
             <input name='fname' type='text' placeholder='Please Enter Last Name' />
        </div>

        <div  className='label-holder'>
              <label>Phone: </label>
             <input name='fname' type='text' placeholder='Please Enter Phone Number' pattern="{[0][0-9]{9}}" />
             </div>
             
            <div className="button-holder">
            <button className="edit-button">Save</button>
             <button className="edit-button">Delete</button>
          </div>
      </form>
          
    </div>
    
    
  )
}
