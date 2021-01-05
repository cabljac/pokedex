# React pokedex app (featuring graphql and lit-element)

## How to run:

- clone this repo
- ensure you have a local version of the pokemon graphql server running
- ensure the variable PORT in /pokedexsrc/App.js matches where the graphql server is hosted.

then:

`cd pokedex`

`yarn build`

`yarn add serve` 

`serve -s build`
  
(or equivalent)

## Todo/Notes:

  In terms of testing, setting up unit tests with Jest would be my next step.
  
  Everything is in a subdirectory "pokedex" currently as originally I planned to have several docker containers
  (one for the graphql server, one for the app, maybe one for a Selenium server for e2e. I decided against this because it'd be slower.
