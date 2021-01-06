import React, { useState } from 'react';
import './App.css';

import { gql, useQuery } from '@apollo/client';

import './lit/PokeName'
import Nav from './components/Nav'
import PokeContainer from './components/PokeContainer'
import Pokemons from './components/Pokemons'

import useWindowSize from './hooks/useWindowSize'


function App() {
  const {width, height} = useWindowSize()
  const [number, setNumber] = useState(0)


  if (width > 500 && height > 400) {
    return (
      <div className="App">
        <PokeContainer>
          <Pokemons number={number} />
        </PokeContainer>
        <Nav number={number} onClick={setNumber} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Pokemons number={number} />
        <Nav number={number} onClick={setNumber} />
      </div>
    );
  }
}

export default App;
