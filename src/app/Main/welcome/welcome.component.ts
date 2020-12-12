import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../shared/user.service';
import {root} from 'rxjs/internal-compatibility';
import {ToastrService, ActiveToast, Toast, ToastPackage} from 'ngx-toastr';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user: User;
  userc: User;
  usersList: User[];
  id: number;
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userc = new User();
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
    Number(sessionStorage.getItem('id'));
    this.id = Number(sessionStorage.getItem('id'));
    console.log(Number(sessionStorage.getItem('id')));
    this.userService.getUserById(Number(sessionStorage.getItem('id'))).subscribe( user => this.userc = user);
  }
  logout(){
    sessionStorage.removeItem('id');
    console.log(Number(sessionStorage.getItem('id')));
    this.toastr.success('Disocnnected ! See you');
  }
  userid() {
    for (const i in this.usersList) {
      if (this.usersList[i].id === Number(sessionStorage.getItem('id'))) {
        return this.usersList[i];
      }
    }
  }
}
