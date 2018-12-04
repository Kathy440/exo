import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { DataSnapshot } from 'firebase/database';


@Injectable()

export class PostsService {
		
	posts: Post[] = [];
	postsSubject = new Subject<Post[]>();

	constructor() {
		this.getPosts();
	}

	emitPosts() {
		this.postsSubject.next(this.posts);
	}

	savePosts() {
		firebase.database().ref('/posts').set(this.posts);
	}

	getPosts() {
		firebase.database().ref('/posts').
		on('value', (data:DataSnapshot) => {
			this.posts = data.val() ? data.val() :[];
			this.emitPosts();
		  }
		);
	}

	createNewPost(newPost: Post) {
		this.posts.push(newPost);
		this.savePosts();
		this.emitPosts();
	}

	removePost(post: Post) {
		const postIndexToRemove = this.posts.findIndex(
			(postEL) => {
				if(postEL === post) {
					return true;
				}
			}
		);
		this.posts.splice(postIndexToRemove, 1);
		this.savePosts();
		this.emitPosts();
	}

	addLoveIts(post: Post) {
		if(post.loveIts) {
			post.loveIts = post.loveIts + 1;

		} else {
			post.loveIts = 1;
		}	
		this.savePosts();	
		this.emitPosts();
		return post.loveIts
	}

	addDontLoveIts(post: Post) {
		if(post.dontLoveIts) {
			post.dontLoveIts = post.dontLoveIts + 1;

		} else {
			post.dontLoveIts = 1;
		}
		this.savePosts();		
		this.emitPosts();
		return post.dontLoveIts
	}


}