import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../shared/post.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  registerForm: FormGroup;
  @Input() posts: Post;
  @Input() idInput: number;
  constructor(private postService: PostService) { }
  postList: Post[] = null;
  ngOnInit(): void {
    this.post = new Post();
    this.postService.getAllPosts().subscribe(postList => this.postList = postList);
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      msg: new FormControl('', [Validators.required]),
      cv: new FormControl('',[Validators.required])  ,
    });
  }
  add(){
    this.postService.postPost(this.post).subscribe(
      post => this.post = post
    );
  }
  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCESS\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

}
