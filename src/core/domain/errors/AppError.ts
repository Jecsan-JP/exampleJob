export class AppError implements Error {
    name: string = 'AppError';
    constructor(
        public message: string = 'Ocurrió un error. Por favor, intente más tarde.',
        public stack: string | undefined = undefined
    ) { }
}