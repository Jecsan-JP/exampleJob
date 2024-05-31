export class UnimplementedError implements Error {
    name: string = 'UnimplementedError';
    message: string;
    stack?: string | undefined;

    constructor(
        classNotImplemented: any
    ) {
        this.message = `No implementados: ${classNotImplemented.constructor.name}`;
    }
}