import { IKeyValue } from "models";

export class SeccionEstado implements IKeyValue<number> {
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

export class Seccion implements IKeyValue {
  id: string;
  nombre: string;
  estado?: SeccionEstado;
  /**
   *
   */
  constructor() {
    this.id = "";
    this.nombre = "";
    this.estado = undefined;
  }
}
