import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EpmToast } from '@epm/webcomponents/toasts';
import { AprovisionarMedidor } from '../../api/model/aprovisionarMedidor';
import { Frontera } from '../../api/model/frontera';
import { FronteraRequest } from '../../api/model/fronteraRequest';
import { FronteraService } from '../../api/service/frontera-service/frontera.service';

const FORMATO_DIRECCION_IP = 'El formato ingresado de dirección IP no es válido';
const FORMATO_PUERTO = 'El formato del puerto debe ser númerico';
const CAMPOS_POR_DILIGENCIAR = 'Se deben diligenciar todos los campos que son obligatorios(*)';
const APROVISIONAR_MEDIDOR = 'Se ha aprovisionado el medidor';
const DISPOSITIVO = 'El dispositivo con ID:';
const YA_EXISTE = 'ya existe';

@Component({
  selector: 'app-aprovisionar-medidor',
  templateUrl: './aprovisionar-medidor.component.html',
  styleUrls: ['./aprovisionar-medidor.component.scss']
})
export class AprovisionarMedidorComponent implements OnInit {

  @Input() id: string;
  @Output() clickEvent = new EventEmitter();

  public frontera: Frontera;
  public idFrontera: FronteraRequest;
  public aprovisionaMedidor: AprovisionarMedidor;
  // public id: string;
  public guardando = false;
  public error: boolean;
  public serial: string;
  public marca: string;
  public referencia: string;
  public mostrarCampos: boolean;
  public habilitarBotonAprovisionar: boolean;

  mostrarInfoMedidor: boolean;

  public fechaAprovisionamientoIot: string;
  fronteraForm: FormGroup;

  constructor(
    protected fronteraService: FronteraService,
    private fb: FormBuilder,
    public datePipe: DatePipe,
    private toastService: EpmToast,
  ) { }

  ngOnInit(): void {
    this.inicializarFormularioFrontera();
    this. mostrarComponenteMedidor();
    // this.detallesFrontera();
  }

  mostrarComponenteMedidor() {
    this.mostrarInfoMedidor = this.mostrarInfoMedidor ? false : true;
  }

  inicializarFormularioFrontera() {
    this.fronteraForm = this.fb.group({
      autogenerador: this.fb.group({
        id: '',
        nombreRazonSocial: '',
        numeroDocumento: '',
        tipoDocumento: '',
        tipoDocumentoCobro: '',
        tipoPersona: '',
        ubicacion: this.fb.group({
          departamento: '',
          direccion: '',
          municipio: '',
          pais: '',
        }),
        informacionContacto: this.fb.group({
          email: [],
          numeroFijo: [],
          numeroMovil: [],
        }),
      }),
      capacidad: [''],
      circuito: [''],
      comercializador: '',
      constanteEnergia: [''],
      contrato: this.fb.group({
        numeroContrato: '',
        operador: '',
        planFacturacion: '',
        telemedida: '',
        tipoServicio: '',
        usoServicio: [''],
        tipoMercado: [''],
        tipoTecnologia: [''],
        mercadoOrigen: [''],
      }),
      entregaExcedentes: true,
      estrato: [''],
      fechaConexion: [''],
      fechaPasoOpen: '',
      fechaMatricula: '',
      id: '',
      identificadoresIntegracion: this.fb.group({
        idFenix: '',
        idGCE: '',
        idJDEdwardsAn8: '',
        idOpen: '',
      }),
      medidor: this.fb.group({
        marca: [''],
        nivelTension: [''],
        comunicacion: this.fb.group({
          ip: ['', [Validators.required]],
          puerto: ['', [Validators.required]],
          password: '',
          ultimaLectura: '',
          fechaAprovisionamientoIot: '',
          aprovisionado: [{ value: '', disabled: true }],
        }),
        habilitadores: this.fb.group({
          permiteAprovisionamiento: '',
        }),
        referencia: [''],
        serial: [''],
        propiedadMedidor: [''],
      }),
      niu: [''],
      nodoTransformador: '',
      pedido: '',
      epecista: this.fb.group({
        identificacion: [''],
        informacionContacto: this.fb.group({
          numeroFijo: '',
          numeroMovil: [''],
          email: [''],
        }),
        nombreEmpresa: '',
        nombreResponsable: '',
      }),
      posicion: this.fb.group({
        altitud: '',
        latitud: [''],
        longitud: [''],
      }),
      programa: '',
      servicioSuscrito: '',
      ubicacion: this.fb.group({
        departamento: [''],
        direccion: '',
        municipio: [''],
        pais: [''],
      }),
      estacionRadiacion: '',
      tipoGeneracion: [''],
      radicado: '',
      observacion: '',
      fechaSolicitudDocumento: '',
    });
  }

  get formularioFrontera() {
    return this.fronteraForm.controls;
  }

  detallesFrontera() {
    //Otro Medidor bacd37df-076e-41a5-4fd5-08d872c581cb
    //Iskra MT174 9d24145b-82b8-4b76-4ee4-08d872c581cb - 4ac5d14f-35ef-4c53-4eea-08d872c581cb
    this.idFrontera = new FronteraRequest();
    this.idFrontera.id = this.id;
    this.fronteraService.obtenerDetalleFrontera(this.idFrontera).subscribe((dataFrontera) => {
      this.frontera = dataFrontera;
      this.formularioFrontera.medidor.setValue(this.frontera.medidor);
      this.fechaAprovisionamientoIot = this.validarfechaRegistro(this.frontera.medidor.comunicacion.fechaAprovisionamientoIot.toString());
      this.habilitarBoton();
      console.log(this.frontera);
    });
  }

  validarfechaRegistro(date: string): string {
    if (this.frontera.medidor.comunicacion.fechaAprovisionamientoIot.toString() === 'No hay datos') {
      this.fechaAprovisionamientoIot = 'No hay datos';
    } else {
      this.fechaAprovisionamientoIot = this.datePipe.transform(
        this.frontera.medidor.comunicacion.fechaAprovisionamientoIot,
        'yyyy-MM-dd',
      );
      date = this.fechaAprovisionamientoIot;
    }
    return date;
  }

  habilitarBoton() {
    this.habilitarBotonAprovisionar = true;
    if (this.frontera.medidor.comunicacion.aprovisionado && this.frontera.medidor.habilitadores.permiteAprovisionamiento === true) {
      this.habilitarBotonAprovisionar = true;
    } else if (this.frontera.medidor.comunicacion.aprovisionado === false && this.frontera.medidor.habilitadores.permiteAprovisionamiento === true) {
      this.habilitarBotonAprovisionar = false;
    } else {
      this.mostrarCampos = this.mostrarCampos ? false : true;
    }
  }

  aprovisionarMedidor() {
    this.guardando = true;
    if (!this.evaluarDireccionIpCumpleFormatoAprovisionar(this.fronteraForm.value.medidor.comunicacion.ip)) {
      this.toastService.open({ type: 'ERROR', body: FORMATO_DIRECCION_IP });
      return;
    }
    if (!this.evaluarNumeroPuerto(this.fronteraForm.value.medidor.comunicacion.puerto) || this.fronteraForm.value.medidor.comunicacion.puerto === 'No hay datos') {
      this.toastService.open({ type: 'ERROR', body: FORMATO_PUERTO });
      return;
    }
    if (this.fronteraForm.invalid) {
      this.toastService.open({ type: 'WARNING', body: CAMPOS_POR_DILIGENCIAR });
      this.error = true;
      return;
    }
    this.aprovisionaMedidor = new AprovisionarMedidor();
    this.aprovisionaMedidor.idFrontera = this.frontera.id;
    this.aprovisionaMedidor.ip = this.frontera.medidor.comunicacion.ip;
    this.aprovisionaMedidor.puerto = this.frontera.medidor.comunicacion.puerto;
    this.fronteraService.aprovisionarMedidor(this.aprovisionaMedidor).subscribe(
      (_) => {
        this.toastService.open({ type: 'SUCCESS', body: APROVISIONAR_MEDIDOR });
        this.guardando = false;
        this.detallesFrontera();
      },
      (error) => {
        this.error = error;
        this.toastService.open({
          type: 'ERROR',
          body: DISPOSITIVO + ' ' + this.marca + '-' + this.referencia + '-' + this.serial + ' ' + YA_EXISTE });
        this.guardando = false;
      },
    );
  }

  pruebaServicio() {
    this.clickEvent.emit(this.aprovisionarMedidor());
  }

  evaluarDireccionIpCumpleFormatoAprovisionar(ip: string) {
    let formatoCorrecto = ip.split('.');
    if (formatoCorrecto.length != 4) return false;
    for (const i in formatoCorrecto) {
      if (
        !/^\d+$/g.test(formatoCorrecto[i]) ||
        +formatoCorrecto[i] > 255 ||
        +formatoCorrecto[i] < 0 ||
        /^[0][0-9]{1,2}/.test(formatoCorrecto[i])
      )
        return false;
    }
    return true;
  }

  evaluarNumeroPuerto(puerto: string): boolean {
    const expresion = new RegExp(/^[0-9]*$|No hay datos/g);
    const evaluaPuerto = expresion.test(puerto);
    return evaluaPuerto ? true : false;
  }

}
