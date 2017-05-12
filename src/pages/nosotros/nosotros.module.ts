import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nosotros } from './nosotros';

@NgModule({
  declarations: [
    Nosotros,
  ],
  imports: [
    IonicPageModule.forChild(Nosotros),
  ],
  exports: [
    Nosotros
  ]
})
export class NosotrosModule {}
