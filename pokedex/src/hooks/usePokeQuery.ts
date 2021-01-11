
import { request, gql } from "graphql-request";
import {
  useQuery,
} from "react-query";

import { Pokemon } from '../types'

import numbertoID from '../parsers/numberToID';

import '../lit/PokeName.ts'


const PORT = 'http://localhost:5000' // address of graphql pokemon server


const GET_POKEMONS = gql`
  query {
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
  }`



// the following doesn't really work, as there is no appropriate schema on backend.

// const getPokemons = (current: number) => {

//   var RADIUS = 10;
//   var lowerBound = Math.max(current - RADIUS, 0)
//   var upperBound = Math.min(current + RADIUS, 151)

//   var arrIDs = [];

//   while (lowerBound <= upperBound) {
//     arrIDs.push(numbertoID(lowerBound++));
//   }


//
//   return (
//     gql`
//   query {
//     pokemons(first : 151) {
//       name
//       image
//       resistant
//       weaknesses
//       attacks {
//         fast {
//           name
//         }
//         special {
//           name
//         }
//       }
//     }
//   }`
//   )
// }




const usePokeQuery = () => useQuery<Pokemon[], Error>("pokemons", async () => {
  const {
    pokemons
  } = await request(
    PORT,
    GET_POKEMONS
  );
  return pokemons;
})

export default usePokeQuery;