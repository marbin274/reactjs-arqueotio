import { IKeyValue } from "models";
import { Seccion } from "models/seccion";

export class GradoEstado implements IKeyValue<number> {
  id: number;
  nombre: string;
  /**
   *
   */
  constructor() {
    this.id = 0;
    this.nombre = "";
  }
}

export class Grado implements IKeyValue {
  id: string;
  nombre: string;
  estado?: GradoEstado;
  secciones: Seccion[];
  /**
   *
   */
  constructor() {
    this.id = "";
    this.nombre = "";
    this.estado = undefined;
    this.secciones = [];
  }
}
