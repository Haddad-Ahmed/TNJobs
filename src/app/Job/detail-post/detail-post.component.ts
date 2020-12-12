import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {Job} from '../../models/job';
import {ActivatedRoute} from '@angular/router';
import {JobService} from '../../shared/job.service';
import {PostService} from '../../shared/post.service';
import {UserService} from '../../shared/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  id: number;
  idd: number;
  @Input() posts: Post;
  @Input() idInput: number;
  jobList: Job[] = null;
  usersList: User[];
  postList: Post[] = null;
  private serviceRoute = new ActivatedRoute();
  // tslint:disable-next-line:max-line-length
  constructor(private service: ActivatedRoute, private serviceJ: JobService, private serviceP: PostService, private userService: UserService) {
  }


  ngOnInit(): void {
    this.id = this.service.snapshot.params.id;
    this.idd = 0;
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
    Number(sessionStorage.getItem('id'));
    this.idd = Number(sessionStorage.getItem('id'));
    console.log(this.idd);
    this.serviceJ.getAllJobs().subscribe(jobList => this.jobList = jobList);
    this.serviceP.getAllPosts().subscribe(postList => this.postList = postList);
  }


}
