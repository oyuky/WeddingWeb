import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Invitacion } from '../../pages/invitacion/invitacion'
/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'IntroPage',
  segment: '/:tokenId'
})
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})

export class IntroPage {
  param: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.param = navParams.get('tokenId');
    console.log(this.param);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  navHome() {
    if (this.password == "O&F.25.11.2017" || this.password == "lesluthiers") {
       this.navCtrl.setRoot(Invitacion);
    }
   }

}
