import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
  
@Injectable() // indique à angular que le service peut avoir d'autres dépendances
export class PokemonsService {
  
    // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
      return POKEMONS;
    }
      
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): any {
      let pokemons = this.getPokemons();
      
      for(let index = 0; index < pokemons.length; index++) {
        if(id === pokemons[index].id) {
          return pokemons[index];
        }
      }
    }
}

