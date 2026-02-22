import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common';  
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PatientsForm } from './patients-form/patients-form';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patients',
  imports: [CommonModule, MatFormFieldModule,MatListModule, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
})
export class Patients {
  constructor(public dialog: MatDialog) {}

  openFormDialog() {
    console.log('openFormDialog');
    const dialogRef = this.dialog.open(PatientsForm, {
      width: '350px',
    })
  
  }

}
