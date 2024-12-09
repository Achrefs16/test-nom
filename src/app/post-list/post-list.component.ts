import { Component } from '@angular/core';
import { Post } from "../../models/post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  standalone: false,
  
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  constructor(private postservice:PostsService){}
 posts:Post[]=[]
ngOnInit(): void {
    this.posts=this.postservice.Posts;
}
}
