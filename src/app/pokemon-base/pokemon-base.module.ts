import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent
  ],
  providers: [PokemonService]
})
export class PokemonBaseModule {}
