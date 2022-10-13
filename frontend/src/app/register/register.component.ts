import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error : any
  
  result : any

  message : any

  UserRegistrationForm : FormGroup


  constructor(public router  : Router, public apicall : ApicallService) { 

    this.UserRegistrationForm = new FormGroup({

     name : new FormControl('',[Validators.required]),

     email : new FormControl('',[Validators.required,Validators.email]),

     mobile : new FormControl('',[Validators.required, Validators.pattern(/^(0||91)?[6-9][0-9]{9}$/)]),

     password : new FormControl('',[Validators.required]),

     confirmPassword : new FormControl('',[Validators.required])


    })

  }

  ngOnInit(): void {
  }

  onSubmit(confirmPassword:any){

    if(!this.UserRegistrationForm.valid){

      this.error = "Enter Valid details"
    
    }

    else if(confirmPassword !== this.UserRegistrationForm.value.password){
      this.error = "Password and Confirm password does not match"
    }
    else{

      this.error = ""
      
      this.apicall.register(this.UserRegistrationForm.value).subscribe(res => {
        this.result = res ;

        this.message = this.result.data

        if(this.message === "User register successfully"){

          alert(this.message)

          this.router.navigate(['/login'])
        }
        else{

          alert(this.message)
        }

        console.log("Data saved in database")
      }, err => {

        document.write(err.message)
      });

    }

    console.log("User form value is : ", this.UserRegistrationForm.value)
    this.UserRegistrationForm.reset();
  }


  

}
