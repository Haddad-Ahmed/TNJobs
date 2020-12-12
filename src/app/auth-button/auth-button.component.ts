import {Component, Input, OnInit} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {
  gapiSetup;
  authInstance: gapi.auth2.GoogleAuth;
  user: gapi.auth2.GoogleUser;

  @Output() notify: EventEmitter<gapi.auth2.GoogleUser> = new EventEmitter<gapi.auth2.GoogleUser>();
  private error: any;
  constructor() { }

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    if (await this.checkIfUserAuthenticated()) {
      this.user = this.authInstance.currentUser.get();
    }
  }
  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve
    // function is the callback passed to gapi.load
    const pload = new Promise((resolve) => {

      gapi.load('auth2', resolve);
    });

    // When the first promise resolves, it means we have gapi
    // loaded and that we can call gapi.init
    return pload.then(async () => {

      await gapi.auth2
        .init({ client_id: '35929024318-lrkl61sdh17nurvoih9s98d45pb6jmqn.apps.googleusercontent.com' })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
  }
  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    this.notify.emit(this.user);
    // Resolve or reject signin Promise
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user => this.user = user,
        error => this.error = error);
    });
  }
  async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    return this.authInstance.isSignedIn.get();
  }
}
