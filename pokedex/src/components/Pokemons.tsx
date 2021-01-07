import React from 'react';
import '../App.css';

import { gql, useQuery } from '@apollo/client';

import '../lit/PokeName.ts'

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

const pokeParser = (num : number) => {
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

interface Attacks {
  fast: { name: string}[];
  special: { name: string}[]
}

interface Pokemon {
  name: string
  image: string
  resistant: string[]
  weaknesses: string[]
  attacks: Attacks
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'poke-name': PokeNameProps
        }
    }
}

interface PokeNameProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  name: string
}



const Pokemons = ({ number }: pokeprops) => {

  const { loading, error, data } = useQuery(GET_POKEMONS)
  

  if (loading) { console.log("loading");  return < p > Loading</p >;}
  if (error) return <p>Error! {error.message}</p>;

  const pokemon : Pokemon = data.pokemons[number]
  const fast = pokemon.attacks.fast
  const special = pokemon.attacks.special
  const FastAttacks = fast.map((attack, index) => <p key={index}> {attack.name} </p>)
  const SpecialAttacks = special.map((attack, index) => <p key={index}> {attack.name} </p>)
  const Weaknesses = pokemon.weaknesses.map((weakness, index) => <p key={index}> {weakness} </p>)
  const Resistances = pokemon.resistant.map((resistance, index) => <p key={index}> {resistance} </p>)

  return (
    <div className="content">
      <p>
          Number {pokeParser(number)}
      </p>
      <poke-name name={pokemon.name} />  {/* here is my lit element*/ }
      <div className="Row">
        <div className="Section">
          <h3>Weaknesses:</h3>
          {Weaknesses}
        </div>
        <img
          className="Image"
          src={pokemon.image}
          alt={"image of " + pokemon.name}
        />
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

export default Pokemons;