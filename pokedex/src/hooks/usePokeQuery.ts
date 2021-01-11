
import { request, gql } from "graphql-request";
import {
  useQuery,
} from "react-query";

import { Pokemon } from '../types'

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