import { UseCase } from "../../../../core/domain/useCases/UseCase";
import { Pokemon } from "../models/Pokemon";
import { PokemonRequestDto } from "../models/dto/PokemonRequestDto";
import { PokemonRepository } from "../repositories/PokemonRepository";

export class GetPokemonsUseCase implements UseCase<PokemonRequestDto, Pokemon> {

    constructor(private pokemonRepo: PokemonRepository) { }

    execute(t: PokemonRequestDto): Promise<Pokemon> {
        return this.pokemonRepo.getPokemons(t);
    }

}