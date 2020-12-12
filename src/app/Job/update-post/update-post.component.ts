import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../shared/post.service'
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  post: Post;
  constructor(private postsService: PostService, private service: ActivatedRoute) { }

  ngOnInit(): void {
    this.post = new Post();
    this.postsService.getPostById(this.service.snapshot.params.id).subscribe( post => this.post = post);
  }
  save(){
    this.postsService.putPost(this.post).subscribe(
      post => this.post = post,
      error1 => {
        console.error('Update Err');
      }
    );
  }

}
