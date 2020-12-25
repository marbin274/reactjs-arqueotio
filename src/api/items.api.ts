import axiosPrivate from "api/private.api";
import { Grado } from "models/grado";
import { ResponseObject } from "models/response-object";

export class ItemsApi {
  static async list(): Promise<ResponseObject<Grado[]>> {
    const { data } = await axiosPrivate.get<ResponseObject<Grado[]>>(
      "/grados-procesar.json"
    );
    return data;
  }

  static async getByIndex(
    key: string,
    index: string
  ): Promise<Grado> {
    const { data } = await axiosPrivate.get<Grado>(
      `/grados-procesar/data/${index}.json`
    );
    return data;
  }
}
