import { Component, OnInit } from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../shared/job.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Title: string;
  constructor(private jobService: JobService, private toastr: ToastrService) {}
  jobList: Job[] = null;
  job: Job;
  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    this.jobService.getAllJobs().subscribe(jobList => this.jobList = jobList);
    this.toastr.success('Welcome To TNJobs');
  }

}
