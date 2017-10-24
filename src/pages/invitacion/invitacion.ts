import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroPage } from '../../pages/intro/intro';
import { Storage } from '@ionic/Storage';


@Component({
  selector: 'Invitacion',
  templateUrl: 'invitacion.html'
})
export class Invitacion {
  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  ionViewDidLoad() {
  this.storage.get('intro-done').then(done => {
    if (!done) {
      this.storage.set('intro-done', true);
      this.navCtrl.setRoot(IntroPage);
    }
  });
}

}
