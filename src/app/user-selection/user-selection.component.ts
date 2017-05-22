import { Component, OnInit } from '@angular/core';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";
import {SelectUserAction} from "../store/actions";
import {Router, ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../services/authentication-service";
import {Observable} from "rxjs";

@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  loading = false;
  returnUrl: string;
  validationError : string = '';
  model: any = {};
  item: any;

  constructor(private store: Store<ApplicationState>,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.setAuthStatus(false);
    console.log('in login oninit')
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

    onSelectUser(newUserId:number) {

      this.store.dispatch(new SelectUserAction(newUserId));
      this.router.navigate(['/home']);

    }


  login() {
    this.validationError = '';
    this.loading = true;
    this.returnUrl = 'home';
    console.log('in login >>>' + this.model.username);

    this.store.dispatch(new SelectUserAction(1));
    this.router.navigate(['/home']);

    // this.item = this.authenticationService.login(this.model.username, this.model.password)
/*    this.item.subscribe(snapshot => {
      if (((snapshot || {}).firstName || '').toLowerCase() === this.model.username) {
        this.authenticationService.setAuthStatus(true);
        this.router.navigate([this.returnUrl]);
      } else {
        this.authenticationService.setAuthStatus(false);
        this.loading = false;
        this.validationError = "Incorrect Username/password, Please try again.";
      }
    });*/

  }
}


/*
 import { Component, OnInit } from '@angular/core';
 import { Router, ActivatedRoute } from '@angular/router';
 import { AuthenticationService } from '../services/authentication-service'
 import {AngularFire, FirebaseObjectObservable, AngularFireModule} from 'angularfire2';

 @Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
 })
 export class LoginComponent implements OnInit {
 loading = false;
 returnUrl: string;
 model: any = {};
 item: FirebaseObjectObservable<any>;
 validationError : string = '';

 constructor(private route: ActivatedRoute,
 private router: Router,
 private authenticationService: AuthenticationService) { }

 ngOnInit() {
 this.authenticationService.setAuthStatus(false);
 console.log('in login oninit')
 // reset login status
 this.authenticationService.logout();

 // get return url from route parameters or default to '/'
 this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
 }

 login() {
 this.validationError = '';
 this.loading = true;
 this.returnUrl = 'home';
 console.log('in login >>>' + this.model.username);

 this.item = this.authenticationService.login(this.model.username, this.model.password)
 this.item.subscribe(snapshot => {
 if (((snapshot || {}).firstName || '').toLowerCase() === this.model.username) {
 this.authenticationService.setAuthStatus(true);
 this.router.navigate([this.returnUrl]);
 } else {
 this.authenticationService.setAuthStatus(false);
 this.loading = false;
 this.validationError = "Incorrect Username/password, Please try again.";
 }
 });

 }
 }


 */
