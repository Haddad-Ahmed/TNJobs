import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../shared/user.service';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  usersList: User[];
  usercid: number;
  searchText: any;
  id: number;
  role: string;
  userc: User;
  activeUser: User;
  private serviceRoute = new ActivatedRoute();
  constructor(private service: ActivatedRoute, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userc = new User();
    this.userService.getAllUsers().subscribe(usersList => this.usersList = usersList);
    this.id = this.service.snapshot.params.id;
    this.usercid = Number(sessionStorage.getItem('id'));
    this.userService.getUserById(this.usercid).subscribe( user => this.userc = user);
    this.userService.getUserById(this.id).subscribe( user => this.activeUser = user);
    this.role = this.userc.role;
    console.log(this.id);
    console.log(this.usercid);
    this.toastr.success('Welcome !');

  }
  // tslint:disable-next-line:typedef
  deleteUser(user){
    this.userService.deleteUser(user).subscribe(
      () => this.usersList = this.usersList.filter( fuser => fuser.id !== user.id)
    );
  }
  userid() {
    for (const i in this.usersList) {
      if (this.usersList[i].id === Number(sessionStorage.getItem('id'))) {
        this.role = this.usersList[i].role;
        console.log(this.usersList[i].role);
        return this.usersList[i];
      }
    }
  }
  decLiked(us: User) {
    console.log(this.activeUser.id + '-');
    if (us.likes > 1){
      const index = this.usersList.indexOf(us);
      this.usersList[index].likes--;
      this.userService.putUser(this.activeUser).subscribe();
    }
  }

  incLikes(us: User) {
    console.log(this.activeUser.id + '+');
    this.userService.getUserById(us.id).subscribe(data => {
      if (data.likes > 1){
        const index = this.usersList.indexOf(us);
        this.usersList[index].likes++;
        this.userService.putUser(this.activeUser).subscribe();
      }
    });
  }
}
