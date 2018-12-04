import { Component,OnInit } from '@angular/core';
import { Post } from './models/post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor() {
	var config = {
		    apiKey: "AIzaSyD0lqMfwbRn6jBKo99yN7aMNelOu4E7D7s",
		    authDomain: "blogofposts-32ed0.firebaseapp.com",
		    databaseURL: "https://blogofposts-32ed0.firebaseio.com",
		    projectId: "blogofposts-32ed0",
		    storageBucket: "blogofposts-32ed0.appspot.com",
		    messagingSenderId: "865478260559"
	  	};
	  	firebase.initializeApp(config);
	}
	
	ngOnInit() {
		
	};
}


