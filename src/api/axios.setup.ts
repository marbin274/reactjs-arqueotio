import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);

  /*
        Add default headers, interceptors etc..
    */

  return axiosInstance;
};

export interface ApiInterface{
    get: <T>(url: string, queryParams?: object | undefined) => Promise<AxiosResponse<T>>;
    post: <T>(url: string, body: object, queryParams?: object | undefined) => Promise<AxiosResponse<T>>;
    put: <T>(url: string, body: object, queryParams?: object | undefined) => Promise<AxiosResponse<T>>;
    patch: <T>(url: string, body: object, queryParams?: object | undefined) => Promise<AxiosResponse<T>>;
    delete: <T>(url: string, id: number) => Promise<AxiosResponse<T>>
}

export const CreateInstance = (axiosRequestConfiguration: AxiosRequestConfig): ApiInterface => {
    const axiosInstance = initialization(axiosRequestConfiguration);

    const get = <T>(url: string, queryParams?: object): Promise<AxiosResponse<T>> => axiosInstance.get<T>(url, { params: queryParams });

    const post = <T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => axiosInstance.post<T>(url, body, { params: queryParams })

    const put = <T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => axiosInstance.put<T>(url, body, { params: queryParams })

    const patch = <T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => axiosInstance.patch<T>(url, body, { params: queryParams })

    const deleteR = <T>(url: string, id:number): Promise<AxiosResponse<T>> => axiosInstance.delete(`${url}/${id}` )

  return { get, post, put, patch, delete: deleteR };
};
