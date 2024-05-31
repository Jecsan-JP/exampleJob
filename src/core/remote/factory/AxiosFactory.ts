import axios from "axios";
import { pokeapi } from "../constants/RemoteConstants";
// import * as AxiosLogger from 'axios-logger';

export enum ContentType {
    json, multipart
};

export const pokeHttp = axiosApp({ urlBase: pokeapi });

function axiosApp({
    urlBase = "",
    contentType = ContentType.json
} = {}) {
    const instance = axios.create({
        baseURL: urlBase,
        timeout: 90000, //60 segundos
        headers: {
            'Content-Type': contentType === ContentType.multipart ?
                'multipart/form-data' : 'application/json'             //<-------Se hizo una mejora de lo ulimto que esta comentado
        }
    });

    // instance.interceptors.request.use((request) => {
    //     if (urlBase !== crmWsNubek) {
    //         const token = getToken();
    //         if (token) {
    //             request.headers = {
    //                 ...request.headers,
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         }
    //     }

    //     return AxiosLogger.requestLogger(request, {
    //         prefixText: 'Axios',
    //         dateFormat: 'HH:MM:ss',
    //         headers: true,
    //     });
    // });

    // instance.interceptors.response.use((response) => {
    //     AxiosLogger.responseLogger(response, {
    //         prefixText: 'Axios',
    //         dateFormat: 'HH:MM:ss',
    //         status: false,
    //         headers: true,
    //     });
    //     return response;
    // }, (error) => {
    //     AxiosLogger.errorLogger(error);
    //     return Promise.reject(error);
    // });

    // instance.interceptors.response.use((response) => {
    //     return AxiosLogger.responseLogger(response, {
    //         headers: true
    //     });
    // });
//-----------------------------------------------------------------------------------------------------------------
    // instance.defaults.baseURL = urlBase;
    // switch (contentType) {
    //     case ContentType.multipart:
    //         instance.defaults.headers.common = {
    //             'Content-Type': 'application/json',
    //         }
    //         break;
    //     case ContentType.json:
    //         instance.defaults.headers.common = {
    //             'Content-Type': 'application/json'
    //         }
    //         break;
    // }
    return instance;
}