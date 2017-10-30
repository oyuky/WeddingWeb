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
    invitado: Invitado = <Invitado> {};;
    selectedItem: any;
    data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private invitadoService: InvitadoService,public alertCtrl: AlertController) {
      //this.invitadoService.load('correo@demo.com').then(data => {this.data = data});
      console.log(this.data);
  }

     alert = this.alertCtrl.create({
       title: 'Gracias por confirmar tu asistencia!',
       subTitle: 'Te haremos llegar un recordatorio cuando se acerque la fecha la boda.',
       buttons: ['OK']
     });

  Confirmar() {
    if(typeof this.invitado.menor === 'undefined')
    {
      this.invitado.menor = 0;
    }
    this.invitadoService.New(this.invitado).subscribe(()=>{
      this.alert.present();
    });
   }

}
