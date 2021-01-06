import '../App.css';

export default function PokeContainer({children}) {
  return (
    <div class="PokeContainer">
        <div class="back">
        <div class="blue-thing">
        </div>
            {children}        
          <div class="door"/>
        </div>
      </div>
  )
}