import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{tienda: string, numero: string,url:string, icon: string}>;
  pinguino: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['pricetag', 'pricetags'];

    this.items = [];
    this.items.push({
        tienda: 'Sears',
        numero: '#10513921',
        url: 'https://www.sears.com.mx/mesaregalos/productos/?id=10513921',
        icon: this.icons[0]
      });

      this.items.push({
          tienda: 'Liverpool' ,
          numero: '#42991151',
          url: 'https://www.liverpool.com.mx/tienda/giftregistry/giftRegistryDetail.jsp?eventNo=1&eventDNo=42991151&_requestid=1111987#',
          icon: this.icons[1]
        });
  }

  itemTapped(event, item) {
     window.open(item.url, "_blank");
    this.pinguino++;
  }
}
