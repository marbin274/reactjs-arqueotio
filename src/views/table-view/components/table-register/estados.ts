import { IKeyValue } from "models";

export const estadosProcesamiento: IKeyValue<number>[] = [
    { id: 1, nombre: 'EN PROCESO' },
    { id: 2, nombre: 'PROCESANDO' },
    { id: 4, nombre: 'PROCESADO' },
    { id: 5, nombre: 'CERRADO' },
];