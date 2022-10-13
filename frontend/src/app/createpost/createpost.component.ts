import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  error : any

  result : any

  message : any

  postForm :FormGroup

  constructor(public router : Router , public apicall : ApicallService) { 

      this.postForm = new FormGroup({

        title : new FormControl('',[Validators.required]),
        content : new FormControl('',[Validators.required])

      })

  }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.postForm.value.title === null && this.postForm.value.content === null){
      this.error = "Title and Content is mandatory"
    }
    else{
      //this.error=" "
      this.apicall.post(this.postForm.value).subscribe(res=>{
        this.result = res;

        this.message = this.result.data
        //this.message = this.result.data

        if(this.message === "Post saved successfully !!"){
          alert(this.message)
          this.router.navigate(['/mypost'])
        }
        else{
          alert(this.message)
        }
        console.log("Post saved")
      },err=>{
        document.write(err.message)
      })
    }

    this.postForm.reset();
    //alert("Post created !!")



  }

}
