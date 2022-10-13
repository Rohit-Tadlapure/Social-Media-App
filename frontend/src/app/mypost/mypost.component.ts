import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  message : any;

  title : any;

  content : any;

  like : boolean = false;




  constructor(private apicall:ApicallService) { }

  ngOnInit(): void {
    this.getpost()
  }

  onclick(){
    this.like ? alert("You Unliked this post !!! "): alert("You Liked this post !!! ") ;
    this.like = !this.like;
  }
  getpost(){
    this.apicall.getpost().subscribe((res)=>{
      this.message = res 
      console.log(this.message.data)
      
      this.content = this.message.data

      console.log(this.content)
      
    })
  }

}
