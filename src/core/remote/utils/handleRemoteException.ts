import { AppError } from "../../domain/errors/AppError";


export function handleRemoteException(error: any): Error {
    console.log('ERROR--->', error.response);
    if (error.response) {
        const body = error.response.data;

        if (error.response.status == 401) {
            throw new AppError("Credenciales inválidas");
        }
        throw new AppError(body.headers?.message ?? 'Lo sentimos, algo salió mal');
    } else if (error.request) {
        throw new AppError("Lo sentimos, no se obtuvo respuesta del servidor. Por favor, intente más tarde");
    } else {
        throw new AppError("Lo sentimos. Por favor, intente más tarde");
    }
}