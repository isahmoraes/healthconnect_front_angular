import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Appointments } from '../appointments/appointments';
import { Patients } from '../patients/patients';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,   // layout fixo
    children: [
      { path: 'home', component: Home },
      { path: 'appointments', component: Appointments },
      { path: 'patients', component: Patients },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];