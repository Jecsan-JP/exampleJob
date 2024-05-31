export class RemoteError implements Error {
    name: string = 'RemoteError';
    message: string;
    stack: string | undefined;

    constructor({
        message = 'Ocurrió un error en la conexión al servidor. Por favor, intente más tarde',
        stack = ''
    }) {
        this.message = message;
        this.stack = stack;
    }
}