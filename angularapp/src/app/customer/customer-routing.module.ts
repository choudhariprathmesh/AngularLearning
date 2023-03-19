import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustometListComponent } from './customet-list/customet-list.component';


const customerRoutes: Routes = [
  {path:'',component:CustometListComponent}
]

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
