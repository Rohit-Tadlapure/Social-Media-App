import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result : any

  message : any

  loginUserForm : FormGroup;


  constructor(public apicall:ApicallService, public router : Router) {

    this.loginUserForm = new FormGroup({

      email : new FormControl('',[Validators.required, Validators.email]),

      password : new FormControl('',[Validators.required])

    })

   }

  ngOnInit(): void {
  }

  login(){
    this.apicall.login(this.loginUserForm.value).subscribe(res=>{


      this.result = res ;

      console.log(this.result.data)

      console.log(this.result.authToken)

      localStorage.setItem("token",this.result.authToken)

      if(this.result.data === "You are successfully Logged in "){

        alert(this.result.data);
        

        this.router.navigate(['/homepage'])
      }
      else{
        
        alert(this.result.data)
        this.router.navigate(['/register'])

      }
      

    })
    
    this.loginUserForm.reset();
  }

}
