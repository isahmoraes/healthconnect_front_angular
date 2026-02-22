import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Appointments } from '../appointments/appointments';
import { Patients } from '../patients/patients';
import { App } from './app';
import { Menu } from '../menu/menu';
import { Doctors } from '../doctors/doctors';

export const routes: Routes = [
  {
    path: '',
    component: Menu,
    children: [
      { path: 'home', component: Home },
      { path: 'appointments', component: Appointments },
      { path: 'patients', component: Patients },
      { path: 'settings', component: Patients },
      { path: 'doctors', component: Doctors },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];