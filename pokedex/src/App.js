import React, { useState } from 'react';
import './App.css';

import { gql, useQuery } from '@apollo/client';

import './lit/PokeName'
import Nav from './components/Nav'
import PokeContainer from './components/PokeContainer'
import Pokemons from './components/Pokemons'

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <PokeContainer>
        <Pokemons number={number} />        
      </PokeContainer>
      <Nav number={number} onClick={setNumber} />
    </div>
  );
}

export default App;
