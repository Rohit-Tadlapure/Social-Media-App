import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 
import { ApicallService } from './apicall.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { MypostComponent } from './mypost/mypost.component';
import { CheckInterceptor } from './check.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    NavbarComponent,
    CreatepostComponent,
    MypostComponent
  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ApicallService,
    {provide:HTTP_INTERCEPTORS,useClass:CheckInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
