import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/Storage';

import { IntroPage } from '../pages/intro/intro';
import { Invitacion } from '../pages/invitacion/invitacion';
import { Confirmacion } from '../pages/confirmacion/confirmacion';
import { ListPage } from '../pages/list/list';
import { Ubicacion } from '../pages/ubicacion/ubicacion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InvitadoService } from '../providers/invitadoService';


@NgModule({
  declarations: [
    IntroPage,
    MyApp,
    Invitacion,
    Confirmacion,
    ListPage,
    Ubicacion
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    IntroPage,
    MyApp,
    Invitacion,
    Confirmacion,
    ListPage,
    Ubicacion
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InvitadoService,
    IonicStorageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
