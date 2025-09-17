import '../forms.css'
import Header from '../../../component/Header'

export default function NewProfile() {
  return (
    <>
    <Header/>
    
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
             
             <div className="low-button-holder">
            <button className="low-button">Create New profile</button>
          </div>
      </form>
          
    </div>
    
    </>
  )
}
