import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../model/pokemon';

const POKEMON_URL = 'http://localhost:3000/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  /* getPokemonList */
  getPokemonList(): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(POKEMON_URL);
  }

  /* getPokemon */
  getPokemon(id: number) {
    return this.http.get<IPokemon>(`${POKEMON_URL}/${id}`);
  }
}
