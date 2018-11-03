import { Component, EventEmitter, Output } from '@angular/core';

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
  postCreated = new EventEmitter();

   onSubmitPost() {
   const post = {
     title: this.enteredTitle,
     content: this.enteredContent
   };

   this.postCreated.emit(post);

  }


}
