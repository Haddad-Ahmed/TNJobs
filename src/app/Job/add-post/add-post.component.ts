import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../shared/post.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {
  id: number;
  user: User;
  post: Post;
  registerForm: FormGroup;
  constructor(private service: ActivatedRoute, private postService: PostService) { }
  postList: Post[] = null;
  selectedFile: ImageSnippet;
  ngOnInit(): void {
    this.id = this.service.snapshot.params.id;
    this.post = new Post();
    this.postService.getAllPosts().subscribe(postList => this.postList = postList);
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      msg: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      jobid: new FormControl('', [Validators.required]),
    });
  }
  add(imageInput){
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.post.cv = '';
      this.post.cv = this.selectedFile.src;
      this.selectedFile.pending = true;

    });
    Object.assign(this.post, this.registerForm.value);
    console.log(this.post.id);
    this.postService.postPost(this.post).subscribe(
      post => this.post = post
    );
  }
  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCESS\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }


  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(file);
      console.log(reader);
      this.post.cv = this.selectedFile.src;
      this.selectedFile.pending = true;
    });

    reader.readAsDataURL(file);
  }

}
