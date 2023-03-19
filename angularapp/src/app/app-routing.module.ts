import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { CustometListComponent } from './customer/customet-list/customet-list.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { TodoComponent } from './todo/todo.component';
import { UserdeatilsComponent } from './userdeatils/userdeatils.component';
import { UserpostComponent } from './userpost/userpost.component';
import { UserpostdetailsComponent } from './userpostdetails/userpostdetails.component';


const routes: Routes = [
  // http://localhost:4200/aboutus
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  { path: 'contactus', component: ContactusComponent },
  { path: 'product', component: ProductComponent,
    children: [
      // for single 
      // {path: '', component: ProductComponent}, 
      {path:'laptop', component:LaptopComponent},
      {path:'mobile', component:MobileComponent},
      {path:'camera', component:CameraComponent},
      {path:'watch', component:WatchComponent}
    ] 
 },
 { path: '', redirectTo: '/product', pathMatch: 'full' },
 {path:'post',component: DemopostComponent},
 {path:'postdetails/:id',component:DemopostdetailsComponent},
 {path:'user',component:UserpostComponent},
 {path:'userdetails/:id',component:UserpostdetailsComponent},
 {path:'userdeatails',component:UserdeatilsComponent},
//  {path:'login',  component:TemplateformsComponent},
 {path:'login',  component:LoginformComponent},
//  {path:'custmor',component:CustometListComponent},
//  {path:'admin',component:AdminListComponent},
{ path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path:'todo',component:TodoComponent},
  // wildcard 
  { path: '**', component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 