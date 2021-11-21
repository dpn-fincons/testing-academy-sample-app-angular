import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {User, UserService} from './services/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user?: User = undefined;

  constructor(
    private dialog: MatDialog,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.loggedUser.subscribe(user => {
      this.user = user;
    });
  }

  onSignIn(): void {
    this.dialog.open(SignInComponent, {
      height: '400px',
      width: '600px',
    });
  }

  onSignOut(): void {
    this.userService.signOut();
  }
}
