import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Invitado } from '../../models/invitado'
import { InvitadoService } from '../../providers/invitadoService'


@IonicPage()
@Component({
  selector: 'confirmacion',
  templateUrl: 'confirmacion.html'
})
export class Confirmacion {
    users: Invitado[]
    selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private invitadoService: InvitadoService) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
  }

    ionViewDidLoad() {
      console.log('Confirmacion');
    }

}
