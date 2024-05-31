import { Pokemon } from "../models/Pokemon";
import { PokemonRequestDto } from "../models/dto/PokemonRequestDto";

export interface PokemonRepository {
    getPokemons(data: PokemonRequestDto): Promise<Pokemon>;
}