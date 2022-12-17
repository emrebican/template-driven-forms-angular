export interface IPokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
  acceptTerms: boolean;
}

export interface IPokemonType {
  key: number;
  value: string;
}
