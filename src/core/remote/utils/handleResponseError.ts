import { AxiosResponse } from "axios";
import { RemoteError } from "../../domain/errors/RemoteError";


export function handleResponseError(response: AxiosResponse) {
    const message = response.data.headers.message
    throw new RemoteError({
        message: message
    });
}