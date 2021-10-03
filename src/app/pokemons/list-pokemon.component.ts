import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';


@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  
  
})
export class ListPokemonComponent implements OnInit {
  // la liste des pokémons
  pokemons!: Pokemon[];

  constructor(private router: Router, private pokemonsSercive: PokemonsService) {}
  
  ngOnInit () {
    this.pokemons= this.pokemonsSercive.getPokemons();
  }

  selectPokemon(pokemon: Pokemon){
    console.log("Vous avez cliquez sur " + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
    
  }
  
  
  
}
