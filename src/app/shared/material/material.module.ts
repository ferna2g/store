import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
