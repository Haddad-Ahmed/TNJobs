import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../shared/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-usersa',
  templateUrl: './usersa.component.html',
  styleUrls: ['./usersa.component.css']
})
export class UsersaComponent implements OnInit {

  a = true;
  categ: string;
  actAll: string;
  actHirer: string;
  actEmploye: string;
  usersList: User[] = null;
  searchinput: string;

  constructor(private userService: UserService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
    this.toastr.success('All Users');
  }

  // tslint:disable-next-line:typedef
  deleteUser(user) {
    this.userService.deleteUser(user).subscribe(
      () => this.usersList = this.usersList.filter(fuser => fuser.id !== user.id)
    );
  }

  search() {
    console.log(this.searchinput);
    this.userService.rechercheM(this.searchinput).subscribe(usersList => this.usersList = usersList);
  }

  // tslint:disable-next-line:typedef
  all() {
    this.categ = 'all';
    this.actAll = 'hvr-radial-in active';
    this.actHirer = 'hvr-radial-in';
    this.actEmploye = 'hvr-radial-in';
    this.a = true;
  }

  // tslint:disable-next-line:typedef
  hirer() {
    this.categ = 'Hirer';
    this.actAll = 'hvr-radial-in ';
    this.actHirer = 'hvr-radial-in active';
    this.actEmploye = 'hvr-radial-in';
    this.a = false;
  }

  // tslint:disable-next-line:typedef
  employe() {
    this.categ = 'Employe';
    this.actAll = 'hvr-radial-in ';
    this.actHirer = 'hvr-radial-in ';
    this.actEmploye = 'hvr-radial-in active';
    this.a = false;
  }

}
