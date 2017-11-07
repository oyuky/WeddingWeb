import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Invitado } from '../../models/invitado'
import { InvitadoService } from '../../providers/invitadoService'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'confirmacion',
  templateUrl: 'confirmacion.html',
  providers: [InvitadoService]
})
export class Confirmacion {
    invitado: Invitado = <Invitado> {};
    selectedItem: any;
    data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private invitadoService: InvitadoService,public alertCtrl: AlertController) {
      //this.invitadoService.load('correo@demo.com').then(data => {this.data = data});
      this.invitado.menor = 0;
      this.invitado.adultos = 0;
  }

     alert = this.alertCtrl.create({
       title: 'Gracias por confirmar tu asistencia!',
       subTitle: 'Te haremos llegar un recordatorio cuando se acerque la fecha la boda.',
       buttons: ['OK']
     });

  Confirmar() {

    this.invitadoService.New(this.invitado).subscribe(()=>{
      this.alert.present();
    });
   }

}
