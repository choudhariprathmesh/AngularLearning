import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustometListComponent } from './customet-list/customet-list.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [CustometListComponent],
  imports: [
    CommonModule   
  ]
})
export class CustomerModule { 
  constructor(){
    console.log('componunt called');
    
  }
}
