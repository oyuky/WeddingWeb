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
  selector: 'page-nosotros',
  templateUrl: 'nosotros.html',
})
export class Nosotros {
  users: Invitado[]
  constructor(public navCtrl: NavController, public navParams: NavParams, private invitadoService: InvitadoService) {
    invitadoService.load().subscribe(users=>{
      console.log(users)
    })
  }

  ionViewDidLoad() {
    console.log('About page Nosotros');
  }

}
