import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { IntroPage } from '../pages/intro/intro'
import { Invitacion } from '../pages/invitacion/invitacion'
import { ListPage } from '../pages/list/list'
import { Confirmacion } from '../pages/confirmacion/confirmacion'
import { Ubicacion } from '../pages/ubicacion/ubicacion'
import { Contacto } from '../pages/contacto/contacto'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = IntroPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Invitacion', component: Invitacion },
      { title: 'Ubicaciones', component: Ubicacion },
      { title: 'Mesa de Regalos', component: ListPage },
      { title: 'Confirmacion', component: Confirmacion },
      { title: 'Contacto', component: Contacto }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
