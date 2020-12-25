import * as yup from "yup";
import { ISeccionSchema, seccionSchema } from "schemas/seccion.schema";
import { crudType, KeyValueWithStateSchema } from "schemas/keyvalue-with-state.schema";
import { IKeyValueWithState } from "models";


export interface IGradoSchema extends IKeyValueWithState {
    secciones?: ISeccionSchema[];
}
export const gradoSchema = (type: crudType): yup.ObjectSchema<IGradoSchema, object> => KeyValueWithStateSchema(type).concat(
    yup.object({
        secciones: yup.array(
            seccionSchema()
        )
    }).defined()
);