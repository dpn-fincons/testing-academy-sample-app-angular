import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  name = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  repeatPassword = new FormControl('', [Validators.required]);
  userForm = new FormGroup({
    'name': this.name,
    'username': this.username,
    'password': this.password,
    'repeatPassword': this.repeatPassword
  });
  errorMessage?: string;

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  onCancelClick() {
    this.name.setValue('');
    this.username.setValue('');
    this.password.setValue('');
    this.repeatPassword.setValue('');
  }

  onSignUpClick() {
    if (this.password.value !== this.repeatPassword.value) {
      this.errorMessage = 'Password and repeat password do not match';
    } else if (this.userService.signUp(this.name.value, this.username.value, this.password.value)) {
      this.router.navigateByUrl('/');
    } else {
      this.errorMessage = 'Username ' + this.username.value + ' already in use';
    }
  }
}
