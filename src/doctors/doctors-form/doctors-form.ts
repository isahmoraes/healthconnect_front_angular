import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-doctors-form',
  imports: [MatDialogModule, MatFormFieldModule,  MatInputModule,
    MatButtonModule],
  templateUrl: './doctors-form.html',
  styleUrl: './doctors-form.css',
})
export class DoctorsForm {

}
