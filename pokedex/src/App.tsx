import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { gql, useQuery } from '@apollo/client';

const GET_POKEMONS = gql`
  {
  pokemons(first : 151) {
    name
    image
    resistant
    weaknesses
    attacks {
      fast {
        name
      }
      special {
        name
      }
    }
  }
}
`

const pokeParser = (num: number) => {
  num = num + 1;
  if (num < 10) {
    return "00" + num.toString();
  } else if (num < 100) {
    return "0" + num.toString();
  } else {
    return num.toString();
  }
}



type pokeprops = { number: number }


const Pokemons = ({ number }: pokeprops) => {
  
  const { loading, error, data } = useQuery(GET_POKEMONS) 
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error! {error.message}</p>;

  const pokemon = data.pokemons[number]


  const fast = pokemon.attacks.fast
  const special = pokemon.attacks.special

  const FastAttacks = fast.map((attack: { name: string }) => <p> {attack.name} </p>)
  const SpecialAttacks = special.map((attack: { name: string }) => <p> {attack.name} </p>)

  return (
    <div>
      <img
        className="Image"
        src={data.pokemons[number].image}
        alt={"image of " + data.pokemons[number].name}
      />
      <h2>
        It's {data.pokemons[number].name}!
      </h2>
      <h3>
        Number {pokeParser(number)}
      </h3>
      <div>
        <h3>Weaknesses:</h3>
        {pokemon.weaknesses}
      </div>
      <div>
        <h3>Resistances:</h3>
        {pokemon.resistant}
      </div>
      <div>
        <h3>Fast Attacks:</h3>
        {FastAttacks}
      </div>
      <div>
        <h3>Special Attacks:</h3>
        {SpecialAttacks}
      </div>
    </div>
  )
}


function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <div className="App-header">
      <Pokemons number={number} />
      <button className="Button" onClick={()=> setNumber(Math.max(number-1,0))}>Previous</button>
        <button className="Button" onClick={() => setNumber(Math.min(number + 1, 150))}>Next</button>
        </div>
    </div>
  );
}

export default App;
