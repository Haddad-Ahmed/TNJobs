import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../shared/user.service';
import {ToastPackage, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  a = true;
  categ: string;
  actAll: string;
  actHirer: string;
  actEmploye: string;
  usersList: User[] = null;
  searchinput: string;
  n: number;

  constructor(private userService: UserService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
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
  number()
  {
    this.searchinput = '';
    this.toastr.success('We have ' + this.usersList.length + ' members !');
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
