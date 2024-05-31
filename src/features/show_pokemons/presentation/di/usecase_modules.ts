import { GetPokemonsUseCase } from "../../domain/usecases/GetPokemonsUseCase";
import { pokemonRemoteSource } from "./remote_modules";


//--------------------------------Cliente---------------------------------------
export function getPokemonsUseCase() {
    return new GetPokemonsUseCase(pokemonRemoteSource());
}