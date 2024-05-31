import { RemoteError } from '../../domain/errors/RemoteError';

export function handleResponse<T>(response: any, map: (data: any) => T): Promise<T> {
    console.log("HandleResponse--->", response);

    if (response.status === 200) {
        if (response.data.data) {
            return Promise.resolve(
                map(response.data.data)
            );
        } else {
            return Promise.resolve(
                map(response.data)
            );
        }

    } else {
        console.log("handleResponse ERROR", response);
        return Promise.reject(
            new RemoteError({
                message: response.data?.headers?.message
            })
        )
    }
}