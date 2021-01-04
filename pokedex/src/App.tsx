import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { gql, useQuery } from '@apollo/client';

const GET_POKEMONS = gql`
  {
  pokemons(first : 151) {
    name
    image
  }
}
`

type pokeprops = { number: number }

const Pokemons = ({number}: pokeprops) => {
  const { loading, error, data } = useQuery(GET_POKEMONS)  
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div>
      <img
        src={data.pokemons[number].image}
      />
      <p>
        It's {data.pokemons[number].name}!
      </p>
    </div>
  )
}


function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <Pokemons number={number} />
      <button className="Button" onClick={()=> setNumber(Math.max(number-1,0))}>Previous</button>
      <button className="Button" onClick={()=> setNumber(Math.min(number+1,150))}>Next</button>
    </div>
  );
}

export default App;
