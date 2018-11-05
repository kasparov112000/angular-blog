import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from './post.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-post',
  templateUrl: './app-create-post.component.html',
  styleUrls: ['./app-create-post.component.css']
})

export class CreatePostComponent {

  postContent = 'hello world';
  enteredContent = '';
  enteredTitle = '';

  @Output()
  postCreated = new EventEmitter<Post>();

   onAddPost(form: NgForm) {
     if (form.invalid) {
       return;
     }

   const post: Post = {
     title: form.value.title,
     content: form.value.content
     };

   this.postCreated.emit(post);

  }


}
