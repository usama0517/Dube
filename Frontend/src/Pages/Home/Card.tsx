import "./viewProfile.css"
interface MyComponentProps {
  firstName: string;
  lastName: string;
  
}

export default function Card(props:MyComponentProps) {
  return (
    <div className="card">
        
        <h3>{props.firstName} </h3>
        <h3>{props.lastName}</h3>
      </div>
  )
}
