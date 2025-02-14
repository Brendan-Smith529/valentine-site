import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AcceptedComponent } from './core/accepted/accepted.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'yippee', component: AcceptedComponent}
];
