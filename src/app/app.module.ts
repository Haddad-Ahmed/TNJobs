import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './Job/jobs/jobs.component';
import { HomeComponent } from './Main/home/home.component';
import { PostComponent } from './Job/post/post.component';
import { LoginComponent } from './Ucomponents/login/login.component';
import { RegisterComponent } from './Ucomponents/register/register.component';
import {UsersComponent} from './Ucomponents/users/users.component';
import {PageNotFoundComponent} from './Main/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfilComponent } from './Ucomponents/profil/profil.component';
import {FilterPipe} from './shared/filter.pipe';
import {ToastrModule} from 'ngx-toastr';
import { DetailJobComponent } from './Job/detail-job/detail-job.component';
import { AddJobComponent } from './Job/add-job/add-job.component';
import { AddPostComponent } from './Job/add-post/add-post.component';
import {ContactusComponent} from './Main/contactus/contactus.component';
import { AllJobsComponent } from './Job/all-jobs/all-jobs.component';
import { UpdateUserComponent } from './Ucomponents/update-user/update-user.component';
import { WelcomeComponent } from './Main/welcome/welcome.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UsersaComponent } from './Admin/usersa/usersa.component';
import { JobsaComponent } from './Admin/jobsa/jobsa.component';
import { PostsaComponent } from './Admin/postsa/postsa.component';
import { UpdateJobComponent } from './Job/update-job/update-job.component';
import { UpdatePostComponent } from './Job/update-post/update-post.component';





@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    HomeComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    PageNotFoundComponent,
    ProfilComponent,
    FilterPipe,
    DetailJobComponent,
    AddJobComponent,
    AddPostComponent,
    ContactusComponent,
    AllJobsComponent,
    UpdateUserComponent,
    WelcomeComponent,
    AuthButtonComponent,
    UsersaComponent,
    JobsaComponent,
    PostsaComponent,
    UpdateJobComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
