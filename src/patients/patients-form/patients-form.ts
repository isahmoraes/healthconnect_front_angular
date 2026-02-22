
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-patients-form',
  imports: [MatDialogModule, MatFormFieldModule,  MatInputModule,
    MatButtonModule],
  templateUrl: './patients-form.html',
  styleUrl: './patients-form.css',
})
export class PatientsForm {

}
