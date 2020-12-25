export interface IKeyValue<T = string> {
    id: T;
    nombre: string;
}

export interface IKeyValueWithState<T = string> extends IKeyValue<T> {
    estado: string;
}