import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: IPokemon[];

  // Dependency Injection
  constructor(private service: PokemonService) {
    this.pokemonList = [];
  }

  // Component rendered cycle
  ngOnInit(): void {
    this.service.getPokemonList().subscribe((data: IPokemon[]) => {
      this.pokemonList = data;
    });

    console.log('Pokemon-list rendered');
  }

  /* Remove */
  handleRemove(event: IPokemon) {
    let newList = this.pokemonList.filter(
      (pokemon: IPokemon) => pokemon.id !== event.id
    );
    this.pokemonList = newList;
  }

  /* Toggle */
  handleToggle(event: IPokemon) {
    let newList = this.pokemonList.map((pokemon: IPokemon) =>
      pokemon.id === event.id
        ? { ...pokemon, isCool: !pokemon.isCool }
        : pokemon
    );

    this.pokemonList = newList;
  }
}
