import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService { 

  constructor(public http : HttpClient) { }

  register(registerData : any){
     

     return this.http.post("http://localhost:3000/register" , registerData)
    }

  login(loginData : any){
    

    return this.http.post("http://localhost:3000/login" , loginData)
  }

  post(postData : any){
    

    return this.http.post("http://localhost:3000/createpost" , postData)
  }

  getpost(){

    return this.http.get("http://localhost:3000/getpost")
  }
}
