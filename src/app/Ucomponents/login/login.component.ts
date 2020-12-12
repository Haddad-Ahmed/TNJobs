import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/user.service';
import {User} from '../../models/user';
import {ToastrService, ActiveToast, Toast, ToastPackage} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  erreur: boolean;
  user: User;
  loginForm: FormGroup;
  connecteduser: User;
  member: User[];
  show: gapi.auth2.GoogleUser;
  user1: User;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(member => this.member = member);
    this.user = new User();
    this.loginForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    });
  }

  add() {
    this.userService.postUser(this.user).subscribe(
      user => this.user = user
    );
  }

  onSubmit() {
    console.log(this.loginForm.value);
    alert('SUCCESS\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  login() {
    this.userService.getAllUsers().subscribe(member => this.member = member);
    for (const i in this.member) {
      if (this.member[i].email === this.user.email && this.member[i].password === this.user.password) {
        sessionStorage.setItem('id', String(this.member[i].id));
        console.log(this.member[i].id);
        this.toastr.success('Welcome Back !');
        this.router.navigate(['/home']);
        break;
      } else {
        this.erreur = true;
        console.log(this.erreur);
      }
    }
    if (this.erreur === true) {this.toastr.error('wrong !'); }
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
        this.email = this.show.getBasicProfile().getEmail();
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
