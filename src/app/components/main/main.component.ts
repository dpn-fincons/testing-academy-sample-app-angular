import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../../services/user-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user?: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.loggedUser.subscribe(user => {
      this.user = user;
    });
  }

}
