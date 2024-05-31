import { PokemonSource } from "../../data/source/PokemonSource";
import { PokemonRemoteSource } from "../../remote/PokemonRemoteSource";

//--------------------------------Cliente---------------------------------------
const PokemonInstance = new PokemonRemoteSource();
export function pokemonRemoteSource(): PokemonSource {
    return PokemonInstance;
}