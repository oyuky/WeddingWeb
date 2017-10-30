import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
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
  ApiUrl = '/api';
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  // Load Invitado
  load(correo:string) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(`${this.ApiUrl}/invitado/`+ correo)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  // Load Invitado
  Save(invitado:Invitado,correo) {
    return this.http.put(`${this.ApiUrl}/invitado/`+ correo, invitado)
      .map(res => "Se ha guardado con exito");
  }

  New(invitado:Invitado) {
    return this.http.post(`${this.ApiUrl}/invitado/`,invitado)
      .map(res => "Se ha guardado con exito");
  }

}
