import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import { Invitado } from '../models/invitado'
/*
  Generated class for the Invitados provider.
http://107.170.240.37:3000/api/invitado
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InvitadoService {
  ApiUrl = '/api'
  constructor(public http: Http) {
    console.log('Service Invitados Provider');
  }
  // Load Invitado
  load(correo:string): Observable<Invitado> {
    return this.http.get(`${this.ApiUrl}/invitado/`+ correo)
      .map(res => <Invitado>res.json());
  }
  // Load Invitado
  Save(invitado:Invitado,correo): Observable<Invitado> {
    return this.http.put(`${this.ApiUrl}/invitado/`+ correo, invitado)
      .map(res => <Invitado>res.json());

  }

  New(invitado:Invitado): Observable<Invitado> {
    return this.http.post(`${this.ApiUrl}/invitado/`,invitado)
      .map(res => <Invitado>res.json());
  }

}
