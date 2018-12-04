import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
	postForm: FormGroup;
	errorMessage: string;


  constructor(private formBuilder: FormBuilder,
  			private postsService: PostsService,
  			private router: Router) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm() {
  	this.postForm = this.formBuilder.group({
  		title: ['', Validators.required],
  		content: ['', Validators.required],
  	});
  }

  onSubmitForm() {
  	const title = this.postForm.get('title').value;
  	const content = this.postForm.get('content').value ;
  	const postLoveIts = 0;
  	const postDontLoveIts = 0;
    const createdAt = Date.now();  
  	const newPost = new Post(title, content, postLoveIts,postDontLoveIts,createdAt);
  	this.postsService.createNewPost(newPost);
  	this.router.navigate(['/posts']);

  	
  }


}