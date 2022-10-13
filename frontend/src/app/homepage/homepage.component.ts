import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  like:any = "like";

  constructor() { }

  ngOnInit(): void {
  }

 


  post: any[] = [
    {
      title:"Sample Title 1",
      content:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.",
      liked: false
    },

    {
      title:"Sample Title 2",
      content:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.",
      liked: false
    },
    
    {
      title:"Sample Title 3",
      content:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.",
      liked: false
    },

    {
      title:"Sample Title 4",
      content:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.",
      liked: false
    }

  ]

  onLike(title:any){
    
    let currentPost = this.post.find(x => x.title === title);
    currentPost.liked = !currentPost.liked;
    this.like ? alert("You Liked this post "):alert("You liked this post")
  
  }

}
