import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';
import {
  BaseResponseDto,
  DeleteRequestConfig,
  GetRequestConfig,
  HttpError,
  HttpInterceptor,
  HttpManager,
  PostRequestConfig,
  PutRequestConfig,
} from './HttpManager';
import { debugPrint } from '../domain/constants/debugPrint';

class HttpAxiosManager implements HttpManager {
  private axiosInstance: AxiosInstance;
  private token: string | undefined;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }
  setToken(token: string | undefined): void {
    this.token = token;
  }

  get<T>({
    endpoint,
    queryParams = {},
    headers = {},
  }: GetRequestConfig): Observable<T> {
    return from(
      this.resolve<T>(
        this.axiosInstance.get<T>(endpoint, {
          params: queryParams,
          headers: {
            ...headers,
            ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
          },
        })
      )
    );
  }

  post<T>({
    endpoint,
    body = {},
    headers = {},
  }: PostRequestConfig): Observable<T> {
    debugPrint('HTTP: ', endpoint);
    return from(
      this.resolve<T>(
        this.axiosInstance.post(endpoint, body, {
          headers: {
            ...headers,
            ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
          },
        })
      )
    );
  }

  put<T>({
    endpoint,
    body = {},
    headers = {},
    queryParams,
  }: PutRequestConfig): Observable<T> {
    return from(
      this.resolve<T>(
        this.axiosInstance.put<T>(endpoint, body, {
          params: queryParams,
          headers: {
            ...headers,
            ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
          },
        })
      )
    );
  }

  delete<T>({
    endpoint,
    queryParams = {},
    headers = {},
  }: DeleteRequestConfig): Observable<T> {
    return from(
      this.resolve<T>(
        this.axiosInstance.delete<T>(endpoint, {
          params: queryParams,
          headers: {
            ...headers,
            ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
          },
        })
      )
    );
  }

  addInterceptor(interceptor: HttpInterceptor): void {
    if (interceptor.request) {
      this.axiosInstance.interceptors.request.use(interceptor.request);
    }
    if (interceptor.response) {
      this.axiosInstance.interceptors.response.use(interceptor.response);
    }
  }

  private resolve<T>(request: Promise<AxiosResponse<any, any>>) {
    return request
      .then((response) => {
        const baseResponse = response.data as BaseResponseDto<T>;
        return baseResponse.data as T;
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          const statusCode = error.response?.data?.header?.code ?? 500;
          const message =
            error.response?.data?.header?.message ?? error.message;
          const errorCode = error.response?.data?.header?.errorCode ?? -80;
          throw new HttpError(statusCode, message, errorCode);
        } else {
          throw error;
        }
      });
  }
}

export default HttpAxiosManager;
