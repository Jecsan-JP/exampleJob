
import { Pokemon } from "../../domain/models/Pokemon";
import { PokemonRequestDto } from "../../domain/models/dto/PokemonRequestDto";

export interface PokemonSource {
    getPokemons(data: PokemonRequestDto): Promise<Pokemon>;
}