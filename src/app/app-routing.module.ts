import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Main/home/home.component';
import {PageNotFoundComponent} from './Main/page-not-found/page-not-found.component';
import {PostComponent} from './Job/post/post.component';
import {JobsComponent} from './Job/jobs/jobs.component';
import {LoginComponent} from './Ucomponents/login/login.component';
import {RegisterComponent} from './Ucomponents/register/register.component';
import {UsersComponent} from './Ucomponents/users/users.component';
import {DetailJobComponent} from './Job/detail-job/detail-job.component';
import {AddJobComponent} from './Job/add-job/add-job.component';
import {ContactusComponent} from './Main/contactus/contactus.component';
import {AllJobsComponent} from './Job/all-jobs/all-jobs.component';
import {AddPostComponent} from './Job/add-post/add-post.component';
import {UpdateUserComponent} from './Ucomponents/update-user/update-user.component';
import {ProfilComponent} from './Ucomponents/profil/profil.component';
import {JobsaComponent} from './Admin/jobsa/jobsa.component';
import {PostsaComponent} from './Admin/postsa/postsa.component';
import {UsersaComponent} from './Admin/usersa/usersa.component';
import {UpdatePostComponent} from './Job/update-post/update-post.component';
import {UpdateJobComponent} from './Job/update-job/update-job.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profil/:id', component: ProfilComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'addpost', component: AddPostComponent},
  {path: 'other', component: UsersComponent},
  {path: 'jobsd', component: JobsComponent},
  {path: 'jobs', component: AllJobsComponent},
  {path: 'addjob', component: AddJobComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'home/job/:id', component: DetailJobComponent},
  {path: 'updateuser/:id', component: UpdateUserComponent},
  {path: 'updatepost/:id', component: UpdatePostComponent},
  {path: 'updatejob/:id', component: UpdateJobComponent},
  {path: 'jobsa', component: JobsaComponent},
  {path: 'postsa', component: PostsaComponent},
  {path: 'usersa', component: UsersaComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
