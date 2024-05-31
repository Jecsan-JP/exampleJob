import { pokeHttp } from "../../../core/remote/factory/AxiosFactory";
import { handleRemoteException } from "../../../core/remote/utils/handleRemoteException";
import { handleResponse } from "../../../core/remote/utils/handleResponse";
import { PokemonSource } from "../data/source/PokemonSource";
import { Pokemon } from "../domain/models/Pokemon";
import { PokemonRequestDto } from "../domain/models/dto/PokemonRequestDto";

export class PokemonRemoteSource implements PokemonSource {

    async getPokemons(data: PokemonRequestDto): Promise<Pokemon> {
        const response = await pokeHttp.get(`/pokemon`, {
            params: { "limit": data.limit, "offset": data.offset }
        })
            .catch((e) => handleRemoteException(e));

        return handleResponse(response, (data) => {

            return new Pokemon({
                ...data
            });

        });
    }

}