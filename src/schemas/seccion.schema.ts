import * as yup from "yup";
import { KeyValueWithStateSchema, crudType } from "schemas/keyvalue-with-state.schema";
import { IKeyValueWithState } from "models";

export interface ISeccionSchema extends IKeyValueWithState {
   
}
export const seccionSchema = (type: crudType = "add"): yup.ObjectSchema<ISeccionSchema, object> => KeyValueWithStateSchema(type);