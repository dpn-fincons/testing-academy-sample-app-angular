import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-auto-sign-in',
  templateUrl: './auto-sign-in.component.html'
})
export class AutoSignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.signInAsTester();
    this.router.navigateByUrl('/')
  }

}
