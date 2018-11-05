import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from './post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from './post.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './app-create-post.component.html',
  styleUrls: ['./app-create-post.component.css']
})

export class CreatePostComponent {

  constructor(public postsService: PostsService) {}

  postContent = 'hello world';
  enteredContent = '';
  enteredTitle = '';

   onAddPost(form: NgForm) {
     if (form.invalid) {
       return;
     }

     this.postsService.addPost(form.value.title, form.value.matDialogContent);

  }


}
