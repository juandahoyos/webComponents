import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/components/api/service/base.service';
import { environment } from 'src/environments/environment';
import { AprovisionarMedidor } from '../../model/aprovisionarMedidor';
import { Frontera } from '../../model/frontera';
import { FronteraRequest } from '../../model/fronteraRequest';
import { RequestFronteraMedidor } from '../../model/requestFronteraMedidor';

@Injectable({
  providedIn: 'root'
})
export class FronteraService {

  constructor(protected http: BaseService) { }

  public obtenerDetalleFrontera(id: FronteraRequest) {
    return this.http.doPost<FronteraRequest, Frontera>(`${environment.apiUrl}/frontera/detalle`, id);
  }

  public aprovisionarMedidor(aprovisionar: AprovisionarMedidor) {
    return this.http.doPost<AprovisionarMedidor, any>(`${environment.apiUrl}/frontera/medidor/aprovisionar`, aprovisionar);
  }

  public desaprovisionarMedidor(idFrontera: RequestFronteraMedidor) {
    return this.http.doPost<RequestFronteraMedidor, any>(`${environment.apiUrl}/frontera/medidor/desaprovisionar`, idFrontera);
  }
}
