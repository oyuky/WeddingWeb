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
    message: string;
    coun:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private invitadoService: InvitadoService,public alertCtrl: AlertController) {
      //this.invitadoService.load('correo@demo.com').then(data => {this.data = data});
      this.invitado.menor = 0;
      this.invitado.adultos = 0;
      this.coun = 0;
      this.message = "";
  }

     alert = this.alertCtrl.create({
       title: 'Gracias por confirmar tu asistencia!',
       subTitle: 'Te haremos llegar un recordatorio cuando se acerque la fecha la boda.',
       buttons: ['OK']
     });

  Confirmar() {
    this.coun = 0;
    if (this.invitado.adultos>0)
    {
      this.coun = 1;
      this.message = "Necesitas 1 adulto por lo menos.";
    }

    if (this.invitado.familia == null)
    {
      this.coun = 1;
      this.message = "Necesitas capturar la familia por lo menos.";
    }

    if(this.invitado.correo == null){
      this.coun = 1;
      this.message = "Necesitas capturar el correo.";
    }

    if(this.invitado.nombre == null){
      this.coun = 1;
      this.message = "Necesitas capturar el nombre.";
    }

    if(this.coun == 0){
      this.invitadoService.New(this.invitado).subscribe(()=>{
        this.alert.present();
      });
    }
   }

}
