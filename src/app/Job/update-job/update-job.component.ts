import { Component, OnInit } from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../shared/job.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  job: Job;
  constructor(private jobsService: JobService, private service: ActivatedRoute) { }

  ngOnInit(): void {
    this.job = new Job();
    this.jobsService.getJobById(this.service.snapshot.params.id).subscribe( job => this.job = job);
  }
  save(){
    this.jobsService.putJob(this.job).subscribe(
      job => this.job = job,
      error1 => {
        console.error('Update Err');
      }
    );
  }

}
