import { Component, OnInit } from '@angular/core';
import { IPokemon, IPokemonType } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: IPokemon;
  pokemonTypes: IPokemonType[];

  constructor(private pokemonService: PokemonService) {
    this.pokemonTypes = [
      { key: 0, value: 'Fire' },
      { key: 1, value: 'Water' },
      { key: 2, value: 'Electric' }
    ];
  }

  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data: IPokemon) => {
      this.pokemon = data;
    });
  }

  toggleIsCool(event: any) {
    console.log(event);
  }

  handleSubmit(object: any) {
    console.log(object.form.value);
  }
}
