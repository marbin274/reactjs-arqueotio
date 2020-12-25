import { ResponseObject } from "./response-object";

export type LoaderType<T> = { loading: boolean, error?: any, response?: ResponseObject<T> }