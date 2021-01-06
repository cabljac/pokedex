import '../App.css';

export default function PokeContainer({children}) {
  return (
    <div className="PokeContainer">
        <div className="back">
        <div className="blue-thing">
        </div>
            {children}        
          <div className="door"/>
        </div>
      </div>
  )
}