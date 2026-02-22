import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDialog } from '@angular/material/dialog';
import { DoctorsForm } from './doctors-form/doctors-form';
@Component({
  selector: 'app-doctors',
  imports: [ MatFormFieldModule,MatListModule,
    MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './doctors.html',
  styleUrl: './doctors.css',
})
export class Doctors {
   constructor(public dialog: MatDialog) {}
  
    openFormDialog() {
      console.log('openFormDialog');
      const dialogRef = this.dialog.open(DoctorsForm, {
        width: '350px',
      })
    
    }

}
