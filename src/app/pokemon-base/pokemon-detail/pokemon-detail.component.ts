import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  @Input()
  detail!: IPokemon;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  toggle: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onRemove() {
    this.remove.emit(this.detail);
  }

  onToggle() {
    this.toggle.emit(this.detail);
  }
}
