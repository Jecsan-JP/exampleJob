export class Pokemon {
    count: number = 0
    next: string = ""
    previous: string = ""
    results: ResultPokemons[] = []

    constructor(data: Partial<Pokemon> = {}) {
        Object.assign(this, data);
    }
}

export interface ResultPokemons {
    name: string
    url: string
}