import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ubicacion } from './ubicacion';

@NgModule({
  declarations: [
    Ubicacion,
  ],
  imports: [
    IonicPageModule.forChild(Ubicacion),
  ],
  exports: [
    Ubicacion
  ]
})
export class NosotrosModule {}
