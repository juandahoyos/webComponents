import { Ubicacion } from './ubicacion';
import { InformacionContacto } from './informacionContacto';
import { Frontera } from './frontera';

export class Autogenerador {
    id: string;
    informacionContacto: InformacionContacto;
    nombreRazonSocial: string;
    numeroDocumento: string;
    tipoDocumento: number;
    tipoDocumentoCobro: number;
    tipoPersona: number;
    ubicacion: Ubicacion;
    fronteras: Frontera;

    constructor() {
      this.id = this.id;
      this.nombreRazonSocial = this.nombreRazonSocial;
      this.numeroDocumento = this.numeroDocumento;
      this.tipoDocumento = this.tipoDocumento;
      this.tipoDocumentoCobro = this.tipoDocumentoCobro;
      this.tipoPersona = this.tipoPersona;
      this.informacionContacto = new InformacionContacto();
      this.ubicacion = new Ubicacion();
      this.fronteras = new Frontera();
    }

}
