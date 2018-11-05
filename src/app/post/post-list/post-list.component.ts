import { PostsService } from './../post.service';
import { Component, Input, Injectable } from '@angular/core';
import { Post } from '../post.model';c

@Component(
  {
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
  }
)

@Injectable({providedIn: 'root'})
export class PostListComponent {

  @Input()
  posts: Post[] = [];


 constructor(public postsService: PostsService) {

 }

}
