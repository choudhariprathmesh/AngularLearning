import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
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
  // wildcard 
  { path: '**', component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
``