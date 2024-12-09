import { Injectable } from '@angular/core';
import { Post } from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  Posts:Post[]=[{_id:"1",titre:"post1",contenu:"contenu de post1"},
    {_id:"2",titre:"post2",contenu:"contenu de post"},
    {_id:"3",titre:"post3",contenu:"contenu de post3"},
    {_id:"4",titre:"post4",contenu:"contenu de post4"},
   ]
  constructor() { }

  
}
