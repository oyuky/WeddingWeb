import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Invitado } from '../../models/invitado'
import { InvitadoService } from '../../providers/invitadoService'


@Component({
  selector: 'confirmacion',
  templateUrl: 'confirmacion.html'
})
export class Confirmacion {
    invitado: Invitado = <Invitado> {};;
    selectedItem: any;
    data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private invitadoService: InvitadoService) {
      this.data = this.invitadoService.load('testestuser2@corre.com').subscribe();
      console.log(this.data);
  }

  Confirmar() {
    console.log(this.invitado);
    this.invitadoService.New(this.invitado).subscribe();

      console.log(this.data);
   }

}
