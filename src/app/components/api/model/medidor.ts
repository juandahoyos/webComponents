import { Comunicacion } from "./comunicacion";
import { Habilitadores } from "./habilitadores";

export class Medidor {
  marca: number;
  nivelTension: number;
  comunicacion: Comunicacion;
  habilitadores: Habilitadores;
  referencia: string;
  serial: string;
  propiedadMedidor: number;
}
