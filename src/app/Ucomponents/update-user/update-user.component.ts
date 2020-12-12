import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {User} from '../../models/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private service: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = new User();
    this.userService.getUserById(this.service.snapshot.params.id).subscribe( user => this.user = user);
  }
  save(){
    this.userService.putUser(this.user).subscribe(
      user => this.user = user,
      error1 => {
        console.error('Update Err');
      }
    );
  }
}
