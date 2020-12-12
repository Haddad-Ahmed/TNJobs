import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Job} from '../../models/job';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../../shared/job.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-jobsa',
  templateUrl: './jobsa.component.html',
  styleUrls: ['./jobsa.component.css']
})
export class JobsaComponent implements OnInit {

  job: Job;
  registerForm: FormGroup;
  @Input() jobs: Job;
  @Input() titleInput: string;
  @Output() notification = new EventEmitter<Job>();
  constructor(private jobService: JobService, private toastr: ToastrService) { }
  jobList: Job[] = null;


  ngOnInit(): void {
    this.job = new Job();
    this.jobService.getAllJobs().subscribe(jobList => this.jobList = jobList);
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      msg: new FormControl('', [Validators.required]),
    });
    this.toastr.success('All Jobs');
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
  deleteJob(job) {
    this.jobService.deleteJob(job).subscribe(
      () => this.jobList = this.jobList.filter(fuser => fuser.id !== job.id)
    );
  }

}
