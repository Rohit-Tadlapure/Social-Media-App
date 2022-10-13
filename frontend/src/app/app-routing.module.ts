
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MypostComponent } from './mypost/mypost.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'homepage', component:HomepageComponent
  },
  {
    path:'createpost', component:CreatepostComponent
  },
  {
    path:'mypost', component:MypostComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
