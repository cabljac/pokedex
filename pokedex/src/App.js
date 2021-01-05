import React, { useState } from 'react';
import './App.css';

import { gql, useQuery } from '@apollo/client';

import './lit/PokeName'





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

const pokeParser = (num) => {
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



  const FastAttacks = fast.map((attack, index) => <p key={index}> {attack.name} </p>)

  const SpecialAttacks = special.map((attack, index) => <p key={index}> {attack.name} </p>)

  const Weaknesses = pokemon.weaknesses.map((weakness, index) => <p key={index}> {weakness} </p>)

  const Resistances = pokemon.resistant.map((resistance, index) => <p key={index}> {resistance} </p>)

  return (
    <div>
      <div className="Section">
        <img
          className="Image"
          src={data.pokemons[number].image}
          alt={"image of " + data.pokemons[number].name}
        />
        <poke-name name={pokemon.name} />  {/* here is my lit element*/ }
        <h3>
          Number {pokeParser(number)}
        </h3>
      </div>
      <div className="Row">
        <div className="Section">
          <h3>Weaknesses:</h3>
          {Weaknesses}
        </div>
        <div className="Section">
          <h3>Resistances:</h3>
          {Resistances}
        </div>
      </div>
      <div className="Row">
        <div className="Section">
          <h3>Fast Attacks:</h3>
          {FastAttacks}
        </div>
        <div className="Section">
          <h3>Special Attacks:</h3>
          {SpecialAttacks}
        </div>
      </div>
    </div>
  )
}


function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
        <div className="ButtonContainer">
          <button className="Button" onClick={() => setNumber(Math.max(number - 1, 0))}>Prev</button>
          <button className="Button" onClick={() => setNumber(Math.min(number + 1, 150))}>Next</button>
        </div>
        <Pokemons number={number} />
    </div>
  );
}

export default App;