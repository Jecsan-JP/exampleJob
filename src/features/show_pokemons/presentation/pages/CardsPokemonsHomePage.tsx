import { useEffect, useState } from "react"
import { CardPokemonComponent } from "../components/CardPokemonComponent"
import { Pokemon, ResultPokemons } from "../../domain/models/Pokemon"
import { getPokemonsUseCase } from "../di/usecase_modules";
import { handleError } from "../../../../core/presentation/utils/handleError";

export const CardsPokemonsHomePage = () => {

    const [pokemons, setPokemons] = useState<Pokemon>();


    useEffect(() => {
        getPokemonsUseCase().execute({ limit: 18, offset: 0 })
            .then((result: Pokemon) => {
                setPokemons(result);
            })
            .catch((error) => {
                handleError(error);
            })
    }, [])


    return (
        <div className="container-fluid m-2">
            <div className="row">
                {


                    pokemons?.results.map((pokemons: ResultPokemons) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <CardPokemonComponent name={pokemons.name} />
                        </div>
                    ))


                }



            </div>
        </div>
    )
}
