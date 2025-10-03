
import "./header.css"

export default function Header() {
  return (
    <>
    <div className="header">
     
     <h2 onClick={()=>history.back()} style={{cursor: "pointer"}}>Back</h2>
    
     </div>
    </>
  )
}
