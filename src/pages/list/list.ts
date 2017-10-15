import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{tienda: string, numero: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['pricetag', 'pricetags'];

    this.items = [];
    this.items.push({
        tienda: 'Sears',
        numero: '#10513921',
        icon: this.icons[0]
      });

      this.items.push({
          tienda: 'Liverpool' ,
          numero: '#42991151',
          icon: this.icons[1]
        });
  }

  itemTapped(event, item) {

  }
}
