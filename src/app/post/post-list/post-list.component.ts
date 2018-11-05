import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component(
  {
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
  }
)
export class PostListComponent {

  @Input()
  posts: Post[] = [];

  // [
  //   {
  //     title: 'my first post',
  //    content: 'my content for first post'
  //   },
  //   {
  //     title: 'my second post',
  //    content: 'my content for second post'
  //   },
  //   {
  //     title: 'my third post',
  //    content: 'my content for third post'
  //   }
  // ];


}
