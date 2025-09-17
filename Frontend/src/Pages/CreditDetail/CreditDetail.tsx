import './creditDetail.css'

export default function CreditDetail() {
  return (
    <>
    <div className="nav">
         <h2>Home</h2>

         <div className='top-button-holder'>
         <h2>Edit</h2>
         <button>+ New</button>
         </div>

    </div>
    
    <div className='info-displayer'>
        <div>
        <h3>Name: </h3>

         <h3>Phone: </h3>
        </div>

         <h3>Total: </h3>
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
          <tr>
            <td>1/12/24</td>
            <td>Macaroni</td>
            <td>417$</td>
            <td>1</td>
            <td>417</td>
            <td>Unpaid</td>
          </tr>

       </tbody>

       </table>
        
      </div>


      <div className='low-button-holder'>
        <button className='low-button'>Add New Credit</button>
        <button className='low-button'>Pay All Credits</button>
      </div>
    </>
  )
}
