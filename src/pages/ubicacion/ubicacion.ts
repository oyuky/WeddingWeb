import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Invitado } from '../../models/invitado'
import { InvitadoService } from '../../providers/invitadoService'
/**
 * Generated class for the Nosotros page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ubicacion',
  templateUrl: 'ubicacion.html',
})
export class Ubicacion {
  users: Invitado[]
  constructor(public navCtrl: NavController, public navParams: NavParams, private invitadoService: InvitadoService) {

  }

  ionViewDidLoad() {
    console.log('Ubicaciones');
  }

}
