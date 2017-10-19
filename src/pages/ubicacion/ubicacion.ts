import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Nosotros page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;
@Component({
  selector: 'ubicacion',
  templateUrl: 'ubicacion.html',
})
export class Ubicacion {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('map2') mapElement2: ElementRef;

  map: any;
  map2: any;
  marker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad(){
      this.loadMap();
    }

    loadMap(){

      let latLng = new google.maps.LatLng(20.9686481,-89.6224265);
      let latLng2 = new google.maps.LatLng(20.8904389,-89.6656741);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      let mapOptions2 = {
        center: latLng2,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.marker = new google.maps.Marker({
        position: this.map.getCenter(),
        icon: {
          path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          scale: 8
        },
        draggable: false,
        map: this.map
      });
    }
}
