import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Job} from '../../models/job';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../../shared/job.service';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  selectedFile: ImageSnippet;
  job: Job;
  registerForm: FormGroup;
  @Input() jobs: Job;
  @Input() nameInput: string;
  @Output() notification = new EventEmitter<Job>();
  constructor(private jobService: JobService) { }
  jobList: Job[] = null;
  Title: string;

  ngOnInit(): void {
    this.job = new Job();
    this.jobService.getAllJobs().subscribe(jobList => this.jobList = jobList);
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      msg: new FormControl('', [Validators.required]),
    });
  }
  add(imageInput){
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.job.img = '';
      this.job.img = this.selectedFile.src;
      this.selectedFile.pending = true;

    });
    Object.assign(this.job, this.registerForm.value);
    console.log(this.job.id);
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
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(file);
      console.log(reader);
      this.job.img = this.selectedFile.src;
      this.selectedFile.pending = true;
    });

    reader.readAsDataURL(file);
  }


}
