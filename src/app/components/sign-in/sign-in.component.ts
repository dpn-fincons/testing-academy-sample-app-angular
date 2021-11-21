import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  userForm = new FormGroup({'username': this.username, 'password': this.password});
  errorMessage?: string;

  constructor(
    private dialogRef: MatDialogRef<SignInComponent>,
    private userService: UserService) {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSignInClick() {
    if (this.userService.signIn(this.username.value, this.password.value)) {
      this.dialogRef.close();
    } else {
      this.errorMessage = 'Wrong username and/or password';
    }
  }
}
