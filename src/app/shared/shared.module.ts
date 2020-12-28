import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { PruebaComponent } from './components/prueba/prueba.component';



@NgModule({
  declarations: [LoginComponent, PruebaComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
