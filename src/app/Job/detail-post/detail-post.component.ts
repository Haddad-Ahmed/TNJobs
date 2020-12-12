import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {Job} from '../../models/job';
import {ActivatedRoute} from '@angular/router';
import {JobService} from '../../shared/job.service';
import {PostService} from '../../shared/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  id: number;
  @Input() posts: Post;
  @Input() idInput: number;
  jobList: Job[] = null;
  postList: Post[] = null;
  private serviceRoute = new ActivatedRoute();
  constructor(private service: ActivatedRoute, private serviceJ: JobService, private serviceP: PostService) {
  }


  ngOnInit(): void {
    this.id = this.service.snapshot.params.id;
    this.serviceJ.getAllJobs().subscribe(jobList => this.jobList = jobList);
    this.serviceP.getAllPosts().subscribe(postList => this.postList = postList);
  }


}
