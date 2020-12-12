import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  registerForm: FormGroup;
  show: gapi.auth2.GoogleUser;
  user1: User;
  member: User[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.user = new User();
    this.user.likes = 1;
    this.user.role = 'user';
    this.userService.getAllUsers().subscribe(member => this.member = member);
    this.registerForm = new FormGroup({
      namef: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      names: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      sexe: new FormControl('', [Validators.required]) ,
      type: new FormControl('', [Validators.required])  ,
  });
  }
  add(){
    this.userService.postUser(this.user).subscribe(
      user => this.user = user
    );
  }
  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCESS\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
  onChecked(message: gapi.auth2.GoogleUser): void {
    this.show = message;
    if (this.show !== undefined){
      let n = false;
      for (const i in this.member){

        // tslint:disable-next-line:max-line-length
        if (this.member[i].namef === this.show.getBasicProfile().getName() && this.member[i].email === this.show.getBasicProfile().getEmail()){
          sessionStorage.setItem('id', String(this.member[i].id));
          n = true;
          if (this.member[i].role === 'Admin'){
            this.router.navigate(['/home']);
          }else {
            this.router.navigate(['/home']);
          }
        }else{
        }

      }
      if (n === false){
        this.user1.email = this.show.getBasicProfile().getEmail();
        this.user1.namef = this.show.getBasicProfile().getName();
        this.user1.password = '123';
        this.user1.role = 'user';
        this.userService.postUser(this.user1).subscribe(
          user => this.user1 = user
        );
        sessionStorage.setItem('id', String(this.member[this.member.length - 1].id + 1));
        // @ts-ignore
        this.router.navigate(['/home']);
      }
    }
  }

}
