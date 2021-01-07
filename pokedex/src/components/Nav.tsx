import '../App.css';
import '../App.css';
import React, { FunctionComponent } from 'react'

interface NavProps {
  number: number
  onClick: ButtonFunc
}

interface ButtonFunc {
  (number: number) : any
}


const Nav : FunctionComponent<NavProps>  = ({number, onClick}) => (
  <div className="ButtonContainer">
    <button className="Button" onClick={() => onClick(Math.max(number - 1, 0))}>Prev</button>
    <button className="Button" onClick={() => onClick(Math.min(number + 1, 150))}>Next</button>
  </div>
)

export default Nav;