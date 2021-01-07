import '../App.css';
import React, { FunctionComponent } from 'react'

const  PokeContainer : FunctionComponent = ({children}) => (
    <div className="PokeContainer">
        <div className="back">
        <div className="blue-thing">
        </div>
            {children}        
          <div className="door"/>
        </div>
      </div>
)

export default PokeContainer