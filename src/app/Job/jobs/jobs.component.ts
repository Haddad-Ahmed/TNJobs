import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Job} from '../../models/job';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../../shared/job.service';
import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../../models/user';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  job: Job;
  registerForm: FormGroup;
  @Input() jobs: Job;
  @Input() titleInput: string;
  @Output() notification = new EventEmitter<Job>();
  constructor(private jobService: JobService) { }
  jobList: Job[] = null;


  ngOnInit(): void {
    this.titleInput = '';
    this.job = new Job();
    this.jobService.getAllJobs().subscribe(jobList => this.jobList = jobList);
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      msg: new FormControl('', [Validators.required]),
    });
  }
  add(){
    this.jobService.postJob(this.job).subscribe(
      job => this.job = job
    );
  }
  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCESS\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
  sendNotif(){
    this.notification.emit(this.job);
  }

}
