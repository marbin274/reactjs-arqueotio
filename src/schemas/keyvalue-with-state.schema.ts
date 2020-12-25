import { IKeyValueWithState } from "models";
import * as yup from "yup";

export type crudType = "add" | "edit";

export const KeyValueWithStateSchema = (type: crudType = "add"): yup.ObjectSchema<IKeyValueWithState, object> => {
    return yup.object<IKeyValueWithState>({
        id: type === "add" ? yup.string() : yup.string().required("Ingrese el código"),
        nombre: yup.string().defined().required("Ingrese el nombre"),
        estado: yup.string().defined().required("Seleccione un estado")
    }).defined();
};
