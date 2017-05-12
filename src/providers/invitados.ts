import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Invitado } from '../models/invitado';
/*
  Generated class for the Invitados provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Invitados {
  ApiUrl = 'http://localhost:1800/api/invitado'
  constructor(public http: Http) {
    console.log('Service Invitados Provider');
  }
  // Load all Invitados
  load(): Observable<Invitado[]> {
    return this.http.get(`${this.ApiUrl}/users`)
      .map(res => <Invitado[]>res.json());
  }
}
