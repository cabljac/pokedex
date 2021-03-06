
import '../App.css';
import numberToIDs from '../parsers/numberToID';


import '../lit/PokeName.ts'
import usePokeQuery from '../hooks/usePokeQuery';

import {pokeprops, Pokemon} from '../types'
import { useEffect } from 'react';


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

const Pokemons = ({ number }: pokeprops) => {

  // useEffect(() => {
  //   console.log(number);
    
  //   console.log(numberToIDs(number));
  // }, [number])


  const { status, data, error } = usePokeQuery();
  
  switch (status) {
    case "error":
      return <span> Error! {error!.message}</span>
    case "loading":
      return <span>Loading...</span >;
    default:
      const pokemon : Pokemon = data![number]
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
}

export default Pokemons;