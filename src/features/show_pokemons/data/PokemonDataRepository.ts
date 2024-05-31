import { Pokemon } from "../domain/models/Pokemon";
import { PokemonRequestDto } from "../domain/models/dto/PokemonRequestDto";
import { PokemonRepository } from "../domain/repositories/PokemonRepository";
import { PokemonSource } from "./source/PokemonSource";

export class PokemonDataRepository implements PokemonRepository {

    constructor(private remoteSource: PokemonSource) { }

    getPokemons(data: PokemonRequestDto): Promise<Pokemon[]> {
        return this.remoteSource.getPokemons(data);
    }
}