import { Routes } from '@angular/router';
import { IntroPage } from '../pages/intro/intro';

export const appRoutes:Routes = [
  { path: 'intro/:Id', component: IntroPage },
  { path: '',redirectTo: '/', pathMatch: 'full' }
]
