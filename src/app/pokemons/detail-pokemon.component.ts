import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';

import { PokemonsService } from './pokemons.service';

  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    
})
export class DetailPokemonComponent implements OnInit {
  // la propriété pokemons contiendra toute la liste des pokemons, cela nous permettra de rechercher
  // l'identifiant du pokemon dont on souhaite afficher les détails
    
    pokemon!: Pokemon ; // pokemon est le pokemon dont on souhaite affiche les détails à l'utilisateur
  
    constructor(
        private route: ActivatedRoute, 
        private router: Router,
        private pokemonsService: PokemonsService
        ) {}
  
    ngOnInit(): void {
        
        //on recupère l'identifiant du pokemon contenu dans l'url, snapshot permet de recupérer les 
        //paramètres de manière synchrone c-a-d, il bloque le reste du code tant qu'il n'a pas encore recupérer l'id
        // le + permet de caster en nombre l'élément.
        let id = +this.route.snapshot.params['id'];
        this.pokemon = this.pokemonsService.getPokemon(id);
        
    }
  
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
  
}
