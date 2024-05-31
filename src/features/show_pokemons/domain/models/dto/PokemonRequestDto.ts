export class PokemonRequestDto {
    limit: number = 0
    offset: number = 0

    constructor(data: Partial<PokemonRequestDto> = {}) {
        Object.assign(this, data);
    }
}