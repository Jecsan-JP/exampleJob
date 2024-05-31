import { PokemonDataRepository } from "../../data/PokemonDataRepository";
import { pokemonRemoteSource } from "./remote_modules";

//--------------------------------Cliente---------------------------------------
const pokemonRepoInstance = new PokemonDataRepository(pokemonRemoteSource());
export function pokemonRepository() {
    return pokemonRepoInstance;
}