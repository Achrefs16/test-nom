import { Component, Input } from '@angular/core';
import { Post } from "../../models/post.model";

@Component({
  selector: 'app-post-item',
  standalone: false,
  
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input() post:{_id:string,titre:string,contenu:string}|undefined
}
